import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
import * as api from '../api/index';

const initialState = [];

export const MainContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(contextReducer, initialState);


    // AUTH ACTIONS
    const createUser = async (user, router) => {
        const createdUser = await api.register(user);
        dispatch({ type: 'AUTH', data: createdUser });
        router.push('/');
    };

    const loginUser = async (user, router) => {
        const loggedUser = await api.signin(user);
        dispatch({ type: 'AUTH', data: loggedUser });
        router.push('/');
    };

    const logout = (router) => {
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    };
    // END AUTH

    // POST ACTIONS
    const getPosts = async () => {
        try {
            const posts = await api.getPosts();
            dispatch({ type: 'GET_POSTS', payload: posts })
        } catch (error) {
            console.log(error);
        }
    }

    const createPost = async (post) => {
        const createdPost = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', createdPost });
    };
    // END POSTS

    return (
        <MainContext.Provider value={{
            createUser,
            loginUser,
            logout,
            createPost
        }}>
            {children}
        </MainContext.Provider>
    );
};
