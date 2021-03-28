import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}

export default App;
