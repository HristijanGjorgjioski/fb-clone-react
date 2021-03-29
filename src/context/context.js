import React, { createContext, useContext, useReducer } from 'react';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

// Helper function
export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if(context === undefined) throw new Error("useAuthState must be used within a AuthProvider");
    return context;
};

// Helper function
export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);
    if(context === undefined) throw new Error("useAuthDispatch must be used within a AuthProvider");
    return context;
};

// Main Provider
export const Provider = ({ children }) => {
    // const [user, dispatch] = useReducer(AuthReducer, initialState);

    // return (
    //     <AuthStateContext.Provider value={user}>
    //         <AuthDispatchContext.Provider value={dispatch}>
    //             {children}
    //         </AuthDispatchContext.Provider>
    //     </AuthStateContext.Provider>
    // );
};
