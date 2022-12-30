import React, { useReducer, ReactNode } from 'react';
import { Action } from '../@types/reducer';

import { navigate } from '../RootNavigation';

import api from '../services/api';
import { authHeader } from '../services/auth';

const defaultValue = { posts: [], errorMessage: null }

const Context = React.createContext(defaultValue);

const Provider = ({ children }: { children: ReactNode }) => {

    const reducer = (state: any, action: Action) => {
        switch (action.type) {
            case 'create_post':
                return { ...state, posts: [action.payload, ...state.posts] };
            case 'show_posts':
                return { ...state, posts: action.payload };
            case 'like_post':
                return { ...state };
            case 'unlike':
                return { ...state };
        }
    }

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const getPosts = async () => {
        try {
            const getAuthHeader = await authHeader();
            const response = await api.get('/feed', getAuthHeader);
            dispatch({
                type: 'show_posts',
                payload: response.data
            });
        } catch (err) {
            console.error(err);
        }
    }

    const createPost = async ({ title, description }) => {
        const getAuthHeader = await authHeader();
        try {
            const response = await api.post('/posts', { title, description }, getAuthHeader);

            dispatch({ type: 'create_post', payload: response.data });
            navigate('Home');
        } catch (err) {
            console.error(err);
        }
    }

    const likePost = async ({ postId }) => {
        try {


        } catch (err) {
            console.error(err);
        }
    }

    const unlike = async ({ postId }) => {
        try {


        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Context.Provider
            value={{
                ...state,
                getPosts,
                createPost,
                likePost,
                unlike,
            }}

        >{children}
        </Context.Provider>
    )
};

export { Provider, Context };