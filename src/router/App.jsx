import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gustos from '../component/Gustos';
import Home from '../component/Home';
import Layout from '../component/Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
            <Switch>
                <Route exact path='/personal' component={Home} />
                <Route exact path='/personal/gustos' component={Gustos} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;