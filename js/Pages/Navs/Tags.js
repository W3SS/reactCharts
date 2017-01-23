import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Tag from '../Components/Tag'

let Tags = React.createClass({
    render() {
        return(
            <div className="right-box" id="tags">
               this is tags
                <div >
                    <div className="tag-label">tag1</div>
                    <div className="tag-label">tag2</div>
                    <div className="tag-label">tag3</div>
                </div>
                <div className="imgBox container center"
                     style={{display:"inline-block",height:"100%",lineHeight:"300px"}}>
                    <span className="vertical-align-span"> </span>
                    <img style={{verticalAlign:"middle"}} src="../../imgs/threegirls.gif"/>
                </div>
            </div>
        );
    }
});

export default Tags;