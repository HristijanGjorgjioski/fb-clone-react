import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

export default App;
