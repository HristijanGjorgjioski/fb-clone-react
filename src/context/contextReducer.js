import * as api from '../api/index';

const contextReducer = (state, action) => {
    let user;
    let exsistUser;

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
        default:
            return state;
    }
}

export default contextReducer;
