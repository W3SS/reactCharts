import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './Pages/Login.js';
import ChartHandler from './Pages/Chart.js';


let App = React.createClass({
    render() {
        return (
            <div className="nav">
                <Link to="app">Home</Link>
                <Link to="login">Login</Link>
                <Link to="chart">Chart</Link>
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
    </Route>
);

Router.run(routes, function (Handler) {  
    React.render(<Handler/>, document.body);
});