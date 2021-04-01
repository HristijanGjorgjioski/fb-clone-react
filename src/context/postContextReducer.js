const postContext = async (state, action) => {
    let posts;
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        case 'CREATE_POST':
            posts =  [action.payload, { ...state }];
            return posts;
        case 'DELETE_POST':
            return posts.filter((post) => post._id !== action.payload)
        default:
            return state;
    }
}

export default postContext;