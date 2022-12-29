import React, { useReducer, ReactNode } from 'react';
import jwtDecode from 'jwt-decode'
import * as SecureStore from 'expo-secure-store';

import { Auth, UserToken } from '../@types/auth';
import { Action } from '../@types/reducer';

import api from '../services/api'

interface IAuthContext{
    token: string | null,
    user: string | null,
    profile: string | null,
    isLoading: boolean,
    errorMessage: string | null,
    login?: () => void,
    register?: () => void,
    tryLocalLogin: () => void,
  }

const defaultValue = {
    token: null,
    user: null,
    profile: null,
    isLoading: true,
    errorMessage: null,
}

const Context = React.createContext<IAuthContext>(defaultValue);

const Provider = ({ children }: {children: ReactNode}) => {
    const reducer = (state: any, action: Action) => {
        // action: {type: string, payload: any}
        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    ...action.payload,
                    errorMessage: null,
                };
            case 'user_created':
                return {
                    ...state,
                    errorMessage: null,
                }; 
            case 'add_error':
                return {
                    ...state,
                    errorMessage: action.payload,
                };    
                default:
                    return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, defaultValue)

    const login = async ({user, password}: Auth) => {
        try {
            const response = await api.post('/security/login', { user, password })
            const { accessToken } = response.data
            const { profile, user: userName } = jwtDecode(accessToken) as UserToken;

            await SecureStore.setItemAsync('token', accessToken);
            await SecureStore.setItemAsync('user', userName);
            await SecureStore.setItemAsync('profile', profile);

            dispatch({
                type: 'login',
                payload: { token: accessToken, profile, user: userName },
            }) 

        }catch(err) {
            console.error(err);
            dispatch({
                type: 'add_error',
                payload: 'Ocorreu um erro ao fazer login!'
            })
        }
    };

    
    const register = async ({user, password}: Auth) => {
        try {
            await api.post('/security/register', { user, password })

            dispatch({
                type: 'user_created',
            });

        }catch(err) {
            console.error(err);
            dispatch({
                type: 'add_error',
                payload: 'Ocorreu um erro ao cadastrar usuário!'
            })
        }
    };

    const tryLocalLogin = async () => {
        let token, user, profile;
        try {
            token = await SecureStore.getItemAsync('token');
            user = await SecureStore.getItemAsync('user');
            profile = await SecureStore.getItemAsync('profile');

            dispatch({type: 'login', payload: {token, profile, user}})
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <Context.Provider
            value={{
                ...state,
                login,
                register,
                tryLocalLogin,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Provider, Context }
