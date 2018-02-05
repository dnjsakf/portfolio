import React, { Component } from 'react'

import { Route, Router, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './../reducers'

import Home from './Home.js'
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'
import Page4 from './Page4.js'

const store = createStore( reducers, applyMiddleware(thunk) );

const App = ( props )=>{
    return (
        <Provider store={ store }>
            <Router history={ browserHistory }>
                <Route path="/">
                    <IndexRoute component={ Home }/>
                    <Route path="page1" component={ Page1 }/>
                    <Route path="page2" component={ Page2 }/>
                </Route>
                <Route path="/page3" component={ Page3 }/>
                <Route path="/page4" component={ Page4 }/>
            </Router>
        </Provider>
    );
}
export default App

// const loadRoute = callback => module => callback(null, module.default);
/*
<Route path="page1" getComponent={ (location, callback )=>{
    require("./Page1.js").then(loadRoute(callback));
}} />
*/
