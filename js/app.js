import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './Pages/Login.js';
import ChartHandler from './Pages/Chart.js';
import Header from './Components/Header.js';

let App = React.createClass({
    render() {
        return (
            <div className="nav">
                    <Link className="tag-nav" to="app">Home</Link>||
                    <Link className="tag-nav" to="login">Login</Link>||
                    <Link className="tag-nav" to="chart">Chart</Link>||
                    <Link className="tag-nav" to="header">Header</Link>
                {/* this is the importTant part*/}
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
        <Route name="chart" path="/chart" handler={ChartHandler}/>
        <Route name="header" path="/header" handler={Header}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});