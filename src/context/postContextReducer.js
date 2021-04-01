const postContext = async (posts=[], action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        case 'CREATE_POST':
            posts =  [action.payload, { ...posts }];
            return posts;
        case 'DELETE_POST':
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default postContext;