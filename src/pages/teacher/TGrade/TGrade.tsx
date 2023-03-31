import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TGradeCss from "./TGradeCss";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { useEffect, useRef, useState } from "react";

import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
// 더미데이터
import dummyData from "./gradedummy.json";
import infodata from "./infodummy.json";
import SGaugeChart from "../../../components/SGaugeChart/SGaugeChart";
import axios from "axios";

highchartsMore(Highcharts);
solidGauge(Highcharts);

export interface examType {
    typeName: string;
    type: string;
}
export interface gColors {
    mainCol: string;
    backCol: string;
}
export interface testResult {
    score: number;
    srank: number;
    tieCnt: number;
    totalStudents: number;
    testDt: string;
}
export interface studentInfo {
    address: string;
    alternatePhone: string;
    birth: string;
    classDays: string;
    className: string;
    endtime: string;
    grade: number;
    id: number;
    name: string;
    phone: string;
    profileImgURL: string;
    regDt: string;
    school: string;
    starttime: string;
    teacher: string;
}

// weeklyTest
// monthlyTest

const TGrade = () => {
    const [weekTR, setWeekTR] = useState<testResult>({
        score: 0,
        srank: 0,
        tieCnt: 0,
        totalStudents: 0,
        testDt: "",
    });
    const [monthTR, setMonthTR] = useState<testResult>({
        score: 0,
        srank: 0,
        tieCnt: 0,
        totalStudents: 0,
        testDt: "",
    });
    const [sInfo, setSInfo] = useState({
        address: "",
        alternatePhone: "",
        birth: "",
        classDays: "",
        className: "",
        endtime: "",
        grade: 0,
        id: 0,
        name: "",
        phone: "",
        profileImgURL: "",
        regDt: "",
        school: "",
        starttime: "",
        teacher: "",
    });
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

    // 년도 월 select option
    const [scMunth, setScMunth] = useState("");
    const [scYear, setScYear] = useState("");

    const now = new Date(); // 현재 날짜 및 시간
    const nowYear = now.getFullYear(); // 연도
    console.log("연도 : ", nowYear);

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
        for (let i = 2020; i < nowYear + 1; i += 1) {
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
                lineColor: "#00A49A",
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: "#00A49A",
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
                lineColor: "#005853",
                lineWidth: 3,
                marker: {
                    symbol: "circle",
                    lineWidth: 3,
                    fillColor: "#fff",
                    lineColor: "#005853",
                },
            },
        ],
    };

    //  데이터 연동할거임
    useEffect(() => {
        const stuid = "23030004";
        let params: { stuId: string } = {
            stuId: stuid,
        };
        axios
            .get(`http://192.168.0.62:9988/api/student/23030004`, {
                params: params,
            })
            .then(res => {
                // console.log(res.data.info.monthlyTest);
                setWeekTR(res.data.info.monthlyTest);
                // console.log(res.data.info.weeklyTest);
                setMonthTR(res.data.info.weeklyTest);
                setSInfo(res.data.info.basicInfo);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <TSidebar />
            <TGradeCss>
                <div className="tests">
                    <SGaugeChart
                        examType={{ typeName: "주간" }}
                        gColors={{
                            mainCol: "#4543A0",
                            backCol: "#d9d9d9",
                        }}
                        testResult={weekTR}
                    />
                    <SGaugeChart
                        examType={{ typeName: "월간" }}
                        gColors={{
                            mainCol: "#4543A0",
                            backCol: "#d9d9d9",
                        }}
                        testResult={monthTR}
                    />
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
                    {wmBtn.typeName === "주간" ? (
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
                    ) : (
                        <form className="subTitle flexForm">
                            <select
                                value={scYear}
                                onChange={e => setScYear(e.target.value)}
                            >
                                {year()}
                            </select>
                            <span>년</span>

                            <button type="submit" className="submitBt">
                                확인
                            </button>
                        </form>
                    )}

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
            </TGradeCss>
        </>
    );
};

export default TGrade;
