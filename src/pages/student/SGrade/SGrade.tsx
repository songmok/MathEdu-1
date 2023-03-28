import SSidebar from "../../../components/sSidebar/SSidebar";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import SGradeCss from "./SGradeCss";
import { useRef } from "react";

import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

import dummyData from "./gradedummy.json";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const SGrade = () => {
    const chartRef = useRef(null);

    const data1 = dummyData.personalScores;
    console.log(data1);

    const data2 = [40, 50, 60, 70, 80];
    const data3 = [50, 60, 70, 80, 60];

    const options = {
        chart: {
            type: "spline",
        },
        title: {
            text: "월간테스트 결과",
        },
        xAxis: {
            title: {
                text: "Month",
            },
            categories: ["1주", "2주", "3주", "4주", "5주"],
        },
        yAxis: {
            title: {
                text: "점수",
            },
        },
        series: [
            {
                name: "내 점수",
                data: data1,
            },
            {
                name: "반 평균",
                data: data2,
            },
            {
                name: "최고점수",
                data: data3,
            },
        ],
    };

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
        <>
            <SSidebar />
            <SGradeCss>
                <div className="tests">
                    <div className="weekT">
                        <p className="subTitle">주간 테스트</p>
                        <form></form>
                        <div className="newTest">
                            <div className="donutGraph">
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={GaugeChart}
                                />
                                <span className="aa">65%</span>
                            </div>

                            <ul className="gradeList">
                                <li className="gradeLR">
                                    <span className="gradeLRC">점수</span>
                                    <span>65</span>
                                </li>
                                <li className="gradeLR">
                                    <span className="gradeLRC">석차</span>
                                    <span>13</span>
                                </li>
                                <li className="gradeLR">
                                    <span className="gradeLRC">동차석수</span>
                                    <span>2</span>
                                </li>
                                <li className="gradeLR">
                                    <span className='gradeLRC'>수강인원</span>
                                    <span>25</span>
                                </li>
                                <li className="gradeLR">
                                    <span className='gradeLRC'>시험일자</span>
                                    <span>2023-03-01</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="monthT">
                        <p className="subTitle">월간 테스트</p>
                    </div>
                </div>
                <div className="analysis">
                    <p className="subTitle">성적 분석</p>
                    <form></form>

                    <HighchartsReact
                        ref={chartRef}
                        highcharts={Highcharts}
                        oneToOne={true}
                        options={options}
                    />
                    <table className="table">
                        <thead>
                            <tr className="tableHeader">
                                <th>시험일</th>
                                <th>내점수</th>
                                <th>반평균</th>
                                <th>상위 30%</th>
                                <th>전체응시생</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.tableData.map((item, index) => (
                                <tr key={index} className="tableMain">
                                    <td>{item.examDt}</td>
                                    <td>{item.score}</td>
                                    <td>{item.classAvg}</td>
                                    <td>{item.top30pAvg}</td>
                                    <td>{item.attend}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </SGradeCss>
        </>
    );
};

export default SGrade;
