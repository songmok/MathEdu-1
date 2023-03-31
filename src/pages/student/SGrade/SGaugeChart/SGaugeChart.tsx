import SSidebar from "../../../../components/sSidebar/SSidebar";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import SGradeCss from "../SGradeCss";
import { useRef, useState } from "react";

import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
// 더미데이터
import dummyData from "../gradedummy.json";
import infodata from "../infodummy.json";
const SGaugeChart = ({}) => {
    const GaugeChart = {
        chart: {
            type: "solidgauge",
            backgroundColor: "none",
            height: "100%",
        },
        title: {
            text: "",
            style: {
                fontSize: "0px",
            },
        },
        // tooltip: {
        //     borderWidth: 0,
        //     backgroundColor: "none",
        //     shadow: false,
        //     style: {
        //         fontSize: "16px",
        //     },
        //     valueSuffix: "%",
        //     pointFormat:
        //         '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        //     positioner: function (labelWidth) {
        //         return {
        //             x: (this.chart.chartWidth - labelWidth) / 2,
        //             y: this.chart.plotHeight / 2 + 15,
        //         };
        //     },
        // },
        tooltip: {
            borderWidth: 0,
            backgroundColor: "none",
            shadow: false,
            style: {
                fontSize: "16px",
            },
            valueSuffix: "%",
            pointFormat: "",
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
                {
                    // Track for Move
                    outerRadius: "87%",
                    innerRadius: "63%",
                    backgroundColor: "#d9d9d9",
                },
            ],
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: [],
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false,
                },
                linecap: "round",
                stickyTracking: false,
                rounded: true,
            },
        },

        series: [
            {
                name: "상위",
                data: [
                    {
                        color: "#00A49A",
                        radius: "87%",
                        innerRadius: "63%",
                        y: 65,
                    },
                ],
            },
        ],
    };

    return (
        <div className="weekT">
            <p className="subTitle">주간 테스트</p>
            <div className="newTest">
                <div className="donutGraph">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={GaugeChart}
                    />
                    <span className="percentage">
                        65<span className="percent">%</span>
                    </span>
                </div>

                <ul className="gradeList">
                    <li className="gradeLR">
                        <span className="gradeLRC">점수</span>
                        <span className="gradeLRCI">
                            {infodata.weeklyTest.scor}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">석차</span>
                        <span className="gradeLRCI">
                            {infodata.weeklyTest.rank}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">동차석수</span>
                        <span className="gradeLRCI">
                            {infodata.weeklyTest.tieCnt}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">수강인원</span>
                        <span className="gradeLRCI">
                            {infodata.weeklyTest.totalStudents}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">시험일자</span>
                        <span className="gradeLRCI">
                            {infodata.weeklyTest.testDt}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SGaugeChart;
