import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Login from './Pages/Navs/Login.js';
import Home from './Pages/Navs/Home.js';
import Chart from './Pages/Navs/Chart.js';
import Header from './Pages/Navs/Header.js';
import BarChart from './Pages/Components/BarChart.js';

let App = React.createClass({
    render() {
        return (
            <div>
                <div className="nav" >
                    <Link className="tag-nav" to="home">Home</Link>
                    <Link className="tag-nav" to="login">Login</Link>
                    <Link className="tag-nav" to="chart">Chart</Link>
                    <Link className="tag-nav" to="header">Header</Link>
                {/* this is the importTant part*/}
                </div>
                <RouteHandler/>
                
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="home" path="/home" handler={Home}/>
        <Route name="login" path="/login" handler={Login}/>
        <DefaultRoute name="chart" path="/chart" handler={Chart}/>
        <Route name="header" path="/header" handler={Header}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});