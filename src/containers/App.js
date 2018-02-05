import React, { Component } from 'react'

import { Route, Router, browserHistory, indexRoute  } from 'react-router'

import Main from './Main.js'

const loadRoute = callback => module => callback(null, module.default);
const App = ( props )=>{
    return (
        <Router history={ browserHistory }>
            <Route path="/" getComponent={ (location, callback )=>{
                console.log( "[test]", location );
                require('./Home.js').then(loadRoute(callback));
             } } />
            <Route path="/main" getComponent={ (location, callback )=>{ 
                console.log( "[test]", location );
                require('./Main.js').then(loadRoute(callback));
             } } />
        </Router>
    )
}

export default App