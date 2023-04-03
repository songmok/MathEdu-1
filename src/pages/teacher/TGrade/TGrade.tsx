import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TSidebar from "./../../../components/tSidebar/TSidebar";
import TGradeCss from "./TGradeCss";
import Highcharts from "highcharts/highstock";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import SGaugeChart from "./../../../components/SGaugeChart/SGaugeChart";
import TestAnalysis from "./../../../components/testAnalysis/TestAnalysis";
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
export interface TStudentInfo {
    name: string;
    profileImgURL: string;
    birth: string;
    phone: string;
    class: string;
    school: string;
    id: number;
    alternatePhone: string;
    classDays: string;
    startTime: string;
    endTime: string;
    address: string;
    grade: number;
    regDt: string;
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
    const [sInfo, setSInfo] = useState<TStudentInfo>({
        name: "",
        profileImgURL: "",
        birth: "",
        phone: "",
        class: "",
        school: "",
        id: 0,
        alternatePhone: "",
        classDays: "",
        startTime: "",
        endTime: "",
        address: "",
        grade: 0,
        regDt: "",
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
    const location = useLocation();
    const path = location.pathname;
    const stuId = path.split("/").pop(); // "23030004"

    // 학생 정보 데이터연동

    useEffect(() => {
        let params: { stuId?: string } = {
            stuId: stuId,
        };
        axios
            .get(`http://192.168.0.62:9988/api/student/${stuId}`, {
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

    const cM = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setScMunth(Number(e.target.value));
    };
    const cY = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setScYear(Number(e.target.value));
    };
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

    // 주간 월간 변경
    const [wmBtn, setWmBtn] = useState<examType>({
        typeName: "주간",
        type: "week",
    });

    // 월간 주간 성적 그래프
    const sWeeklyTest = () => {
        let params: {
            order: string;
            stuId?: string;
            year: number;
            month: number;
        } = {
            order: "desc",
            month: scMunth,
            stuId: stuId,
            year: scYear,
        };
        axios
            .get(
                `http://192.168.0.62:9988/api/student/exam/weekly/${stuId}/${scYear}/${scMunth}/desc`,
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
        let params: { order: string; stuId?: string; year: number } = {
            order: "desc",
            stuId: stuId,
            year: scYear,
        };
        axios
            .get(
                `http://192.168.0.62:9988/api/student/exam/monthly/${stuId}/${scYear}/desc`,
                { params: params },
            )
            .then(res => {
                // console.log(res.data.data);
                setMonthTest(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    useEffect(() => {
        if (scMunth === nowMonth) {
            sWeeklyTest();
            sMonthlyTest();
        }
    }, []);
    // 월간 주간 변경 버튼
    const wmChange = () => {
        if (wmBtn.typeName === "주간") {
            setWmBtn({ typeName: "월간", type: "month" });
            sMonthlyTest();
        } else {
            setWmBtn({ typeName: "주간", type: "week" });
            sWeeklyTest();
        }
    };

    //확인버튼
    const wMcheck = () => {};

    console.log(stuId);

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
                        <button className="chbt subtitle" onClick={wmChange}>
                            {`${wmBtn.typeName}` === "주간" ? "월간" : "주간"}
                            성적 분석
                        </button>
                    </div>
                    {wmBtn.typeName === "주간" ? (
                        <form className="subTitle flexForm">
                            <select value={scYear} onChange={e => cY(e)}>
                                {year()}
                            </select>
                            <span>년</span>
                            <select value={scMunth} onChange={e => cM(e)}>
                                {month()}
                            </select>
                            <span>월</span>
                            <button type="submit" className="submitBt">
                                확인
                            </button>
                        </form>
                    ) : (
                        <form className="subTitle flexForm">
                            <select value={scYear} onChange={e => cY(e)}>
                                {year()}
                            </select>
                            <span>년</span>

                            <button
                                type="submit"
                                className="submitBt"
                                onClick={wMcheck}
                            >
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
