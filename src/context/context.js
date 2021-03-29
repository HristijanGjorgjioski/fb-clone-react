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

    // const getUser = dispatch({ type: 'GET_USER' });

    return (
        <UserContext.Provider value={{
            createUser,
            loginUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};
