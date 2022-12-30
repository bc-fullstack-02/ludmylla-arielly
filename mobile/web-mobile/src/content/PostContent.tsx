import React, { useReducer, ReactNode } from 'react';
import { Action } from '../@types/reducer';
import * as SecureStore from 'expo-secure-store';

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
                const newPostLike = state.posts;
                const [postLike, ..._] = newPostLike.filter((post) => post._id === action.payload.id);
                postLike.likes.push(action.payload.profile)
                return { ...state, posts: [...newPostLike]};
            case 'unlike':
                const newPostUnlike = state.posts;
                const [postUnlike, ...rest] = newPostUnlike.filter((post) => post._id === action.payload.id);
                const index = postUnlike.likes.indexOf(action.payload.profile);
                postUnlike.likes.splice(index, 1)
                return { ...state, posts: [...newPostUnlike]};
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
            const getAuthHeader = await authHeader();
            const response = await api.post(`/posts/${postId}/like`, null, getAuthHeader);
            const profile = await SecureStore.getItemAsync('profile')
            dispatch({ type: 'like_post', payload: {id: postId, profile: profile}})
        } catch (err) {
            console.error(err);
        }
    }

    const unlike = async ({ postId }) => {
        try {
            const getAuthHeader = await authHeader();
            const response = await api.post(`/posts/${postId}/unlike`, null, getAuthHeader);
            const profile = await SecureStore.getItemAsync('profile');
            dispatch({type: 'unlike', payload: {id: postId, profile: profile}})
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