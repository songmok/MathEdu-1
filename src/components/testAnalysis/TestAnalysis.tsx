import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import highchartsMore from "highcharts/highcharts-more.js";
import { useRef } from "react";
highchartsMore(Highcharts);

interface Iprops {
    testAnalysis: {
        classAvgScores: Array<number>;
        personalScores: Array<number>;
        tableData: Array<{
            attend: number;
            classAvg: number;
            examDt: string;
            score: number;
            top30pAvg: number;
        }>;
        top30pAvgScores: Array<number>;
    };
    examType: {
        typeName: string;
    };
    gLineColors: {
        mainCol: string;
        subCol: string;
        pointCol: string;
    };
}
const TestAnalysis = (props: Iprops) => {
    const chartRef = useRef(null);

    const personalScores =
        props.testAnalysis.personalScores.length === null
            ? [0]
            : props.testAnalysis.personalScores;
    const classAvgScores =
        props.testAnalysis.classAvgScores.length === null
            ? [0]
            : props.testAnalysis.classAvgScores;
    const top30pAvgScores =
        props.testAnalysis.top30pAvgScores.length === null
            ? [0]
            : props.testAnalysis.top30pAvgScores;

    // 차트 옵션 주차
    const testNum = props.testAnalysis.personalScores.length;

    let num = [];
    for (let i = 0; i < testNum; i++) {
        if (props.examType.typeName === "주간") {
            num.push(i + 1 + "주");
        } else {
            num.push(i + 1 + "월");
        }
    }
    // 그래프 옵션
    const options = {
        chart: {
            type: "spline",
        },
        title: {
            text: `${props.examType.typeName} 성적 그래프`,
        },
        xAxis: {
            title: {
                text: "",
            },
            categories: num,
        },
        yAxis: {
            title: {
                text: "점수",
            },
        },
        series: [
            {
                name: "내 점수",
                data: personalScores,
                lineColor: props.gLineColors.mainCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: props.gLineColors.mainCol,
                },
            },
            {
                name: "반 평균",
                data: classAvgScores,
                lineColor: props.gLineColors.pointCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: props.gLineColors.pointCol,
                },
            },
            {
                name: "최고점수",
                data: top30pAvgScores,
                lineColor: props.gLineColors.subCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: props.gLineColors.subCol,
                },
            },
        ],
    };

    return (
        <div>
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
                    {props.testAnalysis.tableData.map((item, index) => (
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
    );
};

export default TestAnalysis;
