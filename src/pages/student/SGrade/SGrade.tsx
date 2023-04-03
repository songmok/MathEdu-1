import SSidebar from "../../../components/sSidebar/SSidebar";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import SGradeCss from "./SGradeCss";
import { useEffect, useRef, useState } from "react";

import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
// 더미데이터
import dummyData from "./gradedummy.json";
import infodata from "./infodummy.json";
import SGaugeChart from "../../../components/SGaugeChart/SGaugeChart";
import HeaderCss from "../../../components/header/HeaderCss";
import Header from "../../../components/header/Header";
import axios from "axios";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export interface examType {
    typeName: string;
    type: string;
}
export interface gColors {
    mainCol: string;
}

export interface studentData {
    info: {
        basicInfo: {
            address: string;
            alternatePhone: string;
            birth: string;
            classDays: string;
            className: string;
            endtime: string;
            grade: string;
            id: string;
            name: string;
            phone: string;
            profileImgURL: string;
            regDt: string;
            school: string;
            starttime: string;
            teacher: string;
        };
        monthlyTest: {
            score: string;
            srank: string;
            testDt: string;
            tieCnt: string;
            totalStudents: string;
        };
        weeklyTest: {
            score: string;
            srank: string;
            testDt: string;
            tieCnt: string;
            totalStudents: string;
        };
    };
}

const SGrade = () => {
    const chartRef = useRef(null);

    // 주간 월간 변경
    const [wmBtn, setWmBtn] = useState<examType>({
        typeName: "주간",
        type: "week",
    });
    const wmchange = () => {
        if (wmBtn.typeName === "주간") {
            setWmBtn({ typeName: "월간", type: "month" });
        } else {
            setWmBtn({ typeName: "주간", type: "week" });
        }
    };

    const sColors = {
        SmainCol: "#005853",
        SfontCol: "#00A49A",
        TmainCol: "#201E59",
        TfontCol: "#4543A0",
        backCol: "#d9d9d9",
        White: "#fff",
    };

    // 년도 월 select option
    const [scMunth, setScMunth] = useState("");
    const [scYear, setScYear] = useState("");

    const now = new Date(); // 현재 날짜 및 시간
    const nowYear = now.getFullYear(); // 연도
    // console.log("연도 : ", nowYear);

    const month = () => {
        let months = [];
        for (let i = 1; i < 13; i += 1) {
            if (i < 10) {
                months.push("0" + i);
            } else {
                months.push(i);
            }
        }

        return months.map(item => (
            <option key={item} value={item}>
                {item}월
            </option>
        ));
    };
    const year = () => {
        let years = [];
        for (let i = 2020; i < nowYear; i += 1) {
            years.push(i);
        }

        return years.map(item => (
            <option key={item} value={item}>
                {item}년
            </option>
        ));
    };

    // 더미데이터
    const personalSc = JSON.parse(dummyData.personalScores);
    const classSc = JSON.parse(dummyData.classAvgScores);
    const topSc = JSON.parse(dummyData.top30pAvgScores);

    // 차트 옵션 주차
    const weekSc = personalSc.length;

    let week = [];
    for (let i = 0; i < weekSc; i++) {
        week.push(i + 1 + "주");
    }

    console.log(wmBtn.type);

    const options = {
        chart: {
            type: "spline",
        },
        title: {
            text: "",
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
                lineColor: sColors.SfontCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: sColors.SfontCol,
                },
            },
            {
                name: "반 평균",
                data: classSc,
                lineColor: sColors.TfontCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: sColors.White,
                    lineColor: sColors.TfontCol,
                },
            },
            {
                name: "최고점수",
                data: topSc,
                lineColor: sColors.SmainCol,
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: sColors.SmainCol,
                },
            },
        ],
    };


    return (
        <>
            <SSidebar />
            <Header />
            <SGradeCss>
                <div className="tests">
                    <SGaugeChart
                        examType={{ typeName: "주간" }}
                        gColors={{
                            mainCol: "#4543A0",
                            backCol: "#d9d9d9",
                        }} testResult={{
                            score: 0,
                            srank: 0,
                            tieCnt: 0,
                            totalStudents: 0,
                            testDt: ''
                        }}                    />
                    <SGaugeChart
                        examType={{ typeName: "월간" }}
                        gColors={{
                            mainCol: "#4543A0",
                            backCol: "#d9d9d9",
                        }} testResult={{
                            score: 0,
                            srank: 0,
                            tieCnt: 0,
                            totalStudents: 0,
                            testDt: ''
                        }}                    />
                </div>
                <div className="analysis">
                    <div className="chtitle">
                        <p className="subTitle">
                            {`${wmBtn.typeName}`} 성적 분석
                        </p>
                        <button className="chbt subtitle" onClick={wmchange}>
                            {`${wmBtn.typeName}` === "주간" ? "월간" : "주간"}
                            성적 분석
                        </button>
                    </div>

                    <form className="subTitle flexForm">
                        <select
                            value={scYear}
                            onChange={e => setScYear(e.target.value)}
                        >
                            {year()}
                        </select>
                        <span>년</span>
                        <select
                            value={scMunth}
                            onChange={e => setScMunth(e.target.value)}
                        >
                            {month()}
                        </select>
                        <span>월</span>
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
