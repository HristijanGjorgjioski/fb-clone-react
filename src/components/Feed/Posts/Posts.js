import React, { useContext } from 'react'
import Post from './Post/Post'

import { MainContext } from '../../../context/context';

const Posts = () => {
    const { getPosts } = useContext(MainContext);
    console.log(getPosts);
    return (
        <div>
            <Post />
        </div>
    )
}

export default Posts;
