import TSidebar from "../../../components/tSidebar/TSidebar";
import TGradeCss from "./TGradeCss";

import Highcharts from "highcharts/highstock";
import { useEffect, useState } from "react";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

import SGaugeChart from "../../../components/SGaugeChart/SGaugeChart";
import axios from "axios";
import TestAnalysis from "../../../components/testAnalysis/TestAnalysis";

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
export interface gLineColors {
    mainCol: string;
    subCol: string;
    pointCol: string;
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
export interface testAnalysis {
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
}

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
    const [sInfo, setSInfo] = useState<studentInfo>({
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
    const [monthTest, setMonthTest] = useState<testAnalysis>({
        personalScores: [],
        classAvgScores: [],
        top30pAvgScores: [],
        tableData: [],
    });

    const [weekTest, setWeekTest] = useState<testAnalysis>({
        personalScores: [],
        classAvgScores: [],
        top30pAvgScores: [],
        tableData: [],
    });

    // 학생 정보 데이터연동
    useEffect(() => {
        const stuid = "23030004";
        let params: { stuId: string } = {
            stuId: stuid,
        };
        axios
            .get(`http://192.168.0.62:9988/api/student/${stuid}`, {
                params: params,
            })
            .then(res => {
                setWeekTR(res.data.info.monthlyTest);
                setMonthTR(res.data.info.weeklyTest);
                setSInfo(res.data.info.basicInfo);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const now = new Date(); // 현재 날짜 및 시간
    const nowYear = now.getFullYear(); // 연도
    const nowMonth = now.getMonth(); // 월
    console.log("월 : ", nowMonth, "연도 : ", nowYear);

    const [scMunth, setScMunth] = useState(nowMonth);
    const [scYear, setScYear] = useState(nowYear);
    // 년도 월 select option 생성
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

    console.log(scMunth, scYear);

    // 주간 월간 변경
    const [wmBtn, setWmBtn] = useState<examType>({
        typeName: "주간",
        type: "week",
    });

    // 월간 주간 성적 그래프
    const sWeeklyTest = () => {
        let params: {
            order: string;
            stuId: string;
            year: number;
            month: number;
        } = {
            order: "desc",
            month: scMunth,
            stuId: "23030004",
            year: scYear,
        };
        axios
            .get(
                " http://192.168.0.62:9988/api/student/exam/weekly/23030004/2023/3/desc",
                { params: params },
            )
            .then(res => {
                // console.log(res.data.data);
                setWeekTest(res.data.data);
            })
            .catch(err => {
                // console.log(err);
            });
    };
    const sMonthlyTest = () => {
        let params: { order: string; stuId: string; year: string } = {
            order: "desc",
            stuId: "23030004",
            year: "2023",
        };
        axios
            .get(
                " http://192.168.0.62:9988/api/student/exam/monthly/23030004/2023/desc",
                { params: params },
            )
            .then(res => {
                // console.log(res.data.data);
                setMonthTest(res.data.data);
            })
            .catch(err => {
                // console.log(err);
            });
    };
    useEffect(() => {
        sWeeklyTest();
        sMonthlyTest();
    }, []);
    // 월간 주간 변경 버튼
    const wmchange = () => {
        if (wmBtn.typeName === "주간") {
            setWmBtn({ typeName: "월간", type: "month" });
            sMonthlyTest();
        } else {
            setWmBtn({ typeName: "주간", type: "week" });
            sWeeklyTest();
        }
    };

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
                            <select value={scYear}>{year()}</select>
                            <span>년</span>
                            <select value={scMunth}>{month()}</select>
                            <span>월</span>
                            <button type="submit" className="submitBt">
                                확인
                            </button>
                        </form>
                    ) : (
                        <form className="subTitle flexForm">
                            <select value={scYear}>{year()}</select>
                            <span>년</span>

                            <button type="submit" className="submitBt">
                                확인
                            </button>
                        </form>
                    )}
                    {wmBtn.typeName === "주간" ? (
                        <TestAnalysis
                            testAnalysis={weekTest}
                            examType={{ typeName: "주간" }}
                            gLineColors={{
                                mainCol: "#005853",
                                subCol: "#00A49A",
                                pointCol: "#4543A0",
                            }}
                        />
                    ) : (
                        <TestAnalysis
                            testAnalysis={monthTest}
                            examType={{ typeName: "월간" }}
                            gLineColors={{
                                mainCol: "#005853",
                                subCol: "#00A49A",
                                pointCol: "#4543A0",
                            }}
                        />
                    )}
                </div>
            </TGradeCss>
        </>
    );
};

export default TGrade;
