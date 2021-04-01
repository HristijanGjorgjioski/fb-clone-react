const postContext = async (state, action) => {
    let posts;
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        case 'CREATE_POST':
            posts =  [action.payload, { ...state }];
            return posts;
        default:
            return state;
    }
}

export default postContext;