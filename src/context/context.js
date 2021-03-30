import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';
import * as api from '../api/index';

const initialState = [];

export const UserContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(contextReducer, initialState);

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
    }

    return (
        <UserContext.Provider value={{
            createUser,
            loginUser,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};
