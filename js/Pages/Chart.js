import React from 'react';
import {Button} from 'antd'


let Chart = React.createClass({

    render() {
        return(
            <div>
                <div className="imgBox container"
                     style={{display:"inline-block",height:"100%",lineHeight:"300px",textAlign:"center"}}>
                    <span class="vertical-align-span"> </span>
                    <img style={{verticalAlign:"middle"}} src="../../imgs/threegirls.gif"/>
                {/*<img width="400" height="225" src="../../imgs/huoche.gif"/>*/}
                    <Button type="ghost">this is a button</Button>
                    <Button type="primary">Primary</Button>
                </div>
            </div>
        );
    }
});

export default Chart;  