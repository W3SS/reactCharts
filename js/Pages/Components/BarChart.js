/**
 * Created by Timi on 2016/11/22.
 */
import React from 'react';

var echarts = require('echarts/lib/echarts');

// 引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
"use strict";
let BarChart = React.createClass({

    componentDidMount(){
        /*if(this.props.id){
            this.getCharts()
        }else {
            console.warn('请传ID');
            throw new error("please define a ID first");
        }*/
        try{
            this.getCharts()
        }catch(e){
            console.error('there is an error'+e.message);
        }
    },
    getCharts(){
        // // $('#mychart').css("height",500);
        // document.getElementById("mychart").style.width="300px";
        // document.getElementById("mychart").style.height="300px";
        var myChart = echarts.init(document.getElementById(this.props.id));
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.resize();
    },
    render(){
        return(
            <div className="charts" id={this.props.id}>123</div>
        )
    }
});


export default BarChart;  