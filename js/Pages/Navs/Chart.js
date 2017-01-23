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
                <BarChart id={"chart1"}/>
                <BarChart id={"chart2"}/>
                <BarChart/>
            </div>
        );
    }
})

export default Chart;  