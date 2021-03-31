import React, { useContext, useEffect } from 'react'
import Post from './Post/Post'

import { MainContext } from '../../../context/context';
import { Button } from '@material-ui/core';

const Posts = () => {
    const { postsState, getPosts } = useContext(MainContext);
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <Post post={postsState} />
        </div>
    )
}

export default Posts;
