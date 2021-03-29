import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const UserContext = createContext(initialState);

// Main Provider
export const Provider = ({ children }) => {
    const [users, dispatch] = useReducer(contextReducer, initialState);

    const createUser = (user) => dispatch({ type: 'CREATE_USER', payload: user });

    return (
        <UserContext.Provider value={{
            createUser
        }}>
            {children}
        </UserContext.Provider>
    );
};
