import * as api from '../api/index';

const contextReducer = (state = { authData: null }, action) => {
    let user;
    let exsistUser;

    switch (action.type) {
        case 'CREATE_USER':
            user = [action.payload];
            localStorage.setItem('user', JSON.stringify(user));
            const { createdUser } = api.register(user);
            return { createdUser, authData: action.data, loading: false, errors: null };
        case 'LOGIN_USER':
            exsistUser = [action.payload];
            localStorage.setItem('user', JSON.stringify({ ...action?.data }));
            const { loggedUser } = api.signin(exsistUser);
            return loggedUser;
        case 'LOGOUT':
            return localStorage.clear();
        default:
            return state;
    }
}

export default contextReducer;
