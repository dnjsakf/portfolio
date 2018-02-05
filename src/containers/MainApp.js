import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MenuList, Home, Page1, Page2, SwitchPage } from './Pages'

const MainApp = ( props )=>{
    return (
        <div className="BrowserRouter">
            <MenuList />
            <Route path="/" component={ Home } exact />
            <Route path="/page1" component={ Page1 }/>
            <Route path="/page2" component={ Page2 }/>
            <Switch>
                <Route path="/page/:pageNumber" component={ SwitchPage }/>
                <Route path="/page" component={ SwitchPage }/>
            </Switch>
        </div>
    );
}
export default MainApp

/*
const loadRoute = callback => module => callback(null, module.default);
    <Route path="page1" getComponent={ (location, callback )=>{
        require("./Page1.js").then(loadRoute(callback));
    }} />
*/

