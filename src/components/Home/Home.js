import React from 'react'
import { Grid, Grow, Container } from '@material-ui/core';

import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div> 
            <Navbar />
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item>
                        <Sidebar />
                    </Grid>
                    <Grid item>
                        <Feed />
                    </Grid>
                    <Grid item>
                        <Search />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
