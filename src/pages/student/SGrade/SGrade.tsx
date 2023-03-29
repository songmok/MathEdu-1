import SSidebar from "../../../components/sSidebar/SSidebar";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import SGradeCss from "./SGradeCss";
import { useRef, useState } from "react";

import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
// 더미데이터
import dummyData from "./gradedummy.json";
import infodata from "./infodummy.json";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const SGrade = () => {
    const [scMunth, setScMunth] = useState("");
    console.log(scMunth);

    const month = () => {
        let month = [];
        for (let i = 1; i < 13; i += 1) {
            if (i < 10) {
                month.push("0" + i);
            } else {
                month.push(i);
            }
        }

        return month.map(item => (
            <option key={item} value={item}>
                {item}월
            </option>
        ));
    };

    const personalSc = JSON.parse(dummyData.personalScores);
    const classSc = JSON.parse(dummyData.classAvgScores);
    const topSc = JSON.parse(dummyData.top30pAvgScores);

    const weekSc = personalSc.length;
    let week = [];
    for (let i = 0; i < weekSc; i++) {
        week.push(i + 1 + "주");
    }
    console.log(week);
    const chartRef = useRef(null);

    const options = {
        chart: {
            type: "spline",
        },
        title: {
            text: "주간테스트 결과",
        },
        xAxis: {
            title: {
                text: "",
            },
            categories: week,
        },
        yAxis: {
            title: {
                text: "점수",
            },
        },
        series: [
            {
                name: "내 점수",
                data: personalSc,
                lineColor: "#005853",
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: "#005853",
                },
            },
            {
                name: "반 평균",
                data: classSc,
                lineColor: "#4543A0",
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: "#4543A0",
                },
            },
            {
                name: "최고점수",
                data: topSc,
                lineColor: "#00A49A",
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: "#00A49A",
                },
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
                    <div className="monthT">
                        <p className="subTitle">월간 테스트</p>
                    </div>
                </div>
                <div className="analysis">
                    <p className="subTitle">성적 분석</p>
                    <form className="subTitle flex">
                        <select onChange={e => setScMunth(e.target.value)}>
                            {month()}
                        </select>
                        <span>월</span>
                        <select>
                            <option value="주간">주간</option>
                            <option value="월간">월간</option>
                        </select>
                        <span>테스트</span>
                        <button type="submit" className="submitBt">
                            확인
                        </button>
                    </form>

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
