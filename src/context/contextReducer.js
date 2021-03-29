import * as api from '../api/index';

const contextReducer = (state, action) => {
    let user;

    switch (action.type) {
        case 'CREATE_USER':
            user = [action.payload, ...state];
            localStorage.setItem('user', JSON.stringify(user));
            const createdUser = api.register(user);
            return createdUser;
        default:
            return state;
    }
}

export default contextReducer;
