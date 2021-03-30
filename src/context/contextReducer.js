const contextReducer = async (state = { authData: null }, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            console.log(action);
            return { ...state, authData: action.data, loading: false, errors: null };
        case 'LOGIN_USER':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case 'LOGOUT':
            return localStorage.clear();
        default:
            return state;
    }
}

export default contextReducer;
