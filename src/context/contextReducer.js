const contextReducer = async (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case 'LOGOUT':
            return localStorage.clear();
        case 'CREATE_POST':
            localStorage.setItem('post', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        default:
            return state;
    }
}

export default contextReducer;
