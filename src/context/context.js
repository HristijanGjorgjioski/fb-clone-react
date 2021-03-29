import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const UserContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(contextReducer, initialState);

    const createUser = (user, router) => {
        dispatch({ type: 'CREATE_USER', payload: user });
        router.push('/');
    };

    const loginUser = (user, router) => {
        dispatch({ type: 'LOGIN_USER', payload: user });
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
