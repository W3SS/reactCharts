import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Login from './Pages/Navs/Login.js';
import Home from './Pages/Navs/Home.js';
import Chart from './Pages/Navs/Chart.js';
import Tags from './Pages/Navs/Tags.js';
import Tag from './Pages/Components/Tag.js';

let App = React.createClass({
    render() {
        return (
            <div>
                <div className="nav" >
                    <Link className="tag-nav" to="home">Home</Link>
                    <Link className="tag-nav" to="login">数据表格</Link>
                    <Link className="tag-nav" to="chart"> 图表 </Link>
                    <Link className="tag-nav" to="tags">Tags</Link>
                {/* this is the importTant part*/}
                </div>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="home" path="/home" handler={Home}/>
        <Route name="login" path="/login" handler={Login}/>
        <Route name="chart" path="/chart" handler={Chart}/>
        <Route name="tags" path="/tags" handler={Tags}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});