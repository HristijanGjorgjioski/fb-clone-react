import React, { useContext, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';

import Post from './Post/Post'
import { MainContext } from '../../../context/context';

const Posts = ({ setCurrentId }) => {
    const { postsState, getPosts } = useContext(MainContext);
    
    useEffect(() => {
        getPosts();
    }, []);

    return (
            !postsState.length ? <CircularProgress /> : (
                <div>
                    {postsState.map((post) => (
                        <div key={post._id}>
                            <Post key={post._id} post={postsState} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </div>
            )
    )
}

export default Posts;
