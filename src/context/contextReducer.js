import * as api from '../api/index';

const contextReducer = (state, action) => {
    let user;
    let exsistUser;
    let currentUser;

    switch (action.type) {
        case 'CREATE_USER':
            user = [action.payload];
            localStorage.setItem('user', JSON.stringify(user));
            const { createdUser } = api.register(user);
            return createdUser;
        case 'LOGIN_USER':
            exsistUser = [action.payload];
            localStorage.setItem('user', JSON.stringify(exsistUser));
            const { loggedUser } = api.signin(exsistUser);
            return loggedUser;
        case 'GET_USER':
            currentUser = localStorage.getItem('user');
            return currentUser;
        default:
            return state;
    }
}

export default contextReducer;
