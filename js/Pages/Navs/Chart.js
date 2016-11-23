import React from 'react';
import {Button} from 'antd'
import BarChart from '../Components/BarChart'
var echarts = require('echarts/lib/echarts');
import {Row,Col} from 'antd'

// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
"use strict";
let Chart = React.createClass({
    
    render() {
        return(
            <div className="right-box">
                <div className="imgBox container"
                     style={{display:"inline-block",height:"100%",lineHeight:"300px",textAlign:"center"}}>
                    <span className="vertical-align-span"> </span>
                    <BarChart/>
                    <img style={{verticalAlign:"middle"}} src="../../imgs/threegirls.gif"/>
                {/*<img width="400" height="225" src="../../imgs/huoche.gif"/>*/}
                    {/* <Button></Button>*/}
                </div>
            </div>
        );
    }
})

export default Chart;  