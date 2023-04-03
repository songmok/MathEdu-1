import { TStudentTestDetailCss } from "./TStudentTestDetailCss";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import highchartsMore from "highcharts/highcharts-more.js";
import TSidebar from "../../../../../../components/tSidebar/TSidebar";
import TClassTestDetail from "../../../../../../components/tclassDetail/TClassTest/TClassTestDetail/TClassTestDetail";
import axios from "axios";
import { TStudentChartCss } from "./TStudentChartCss";

highchartsMore(Highcharts);
const TStudentTestDetail = () => {
    const chartRef = useRef(null);
    const { pathname } = useLocation();
    const examNo = pathname.split("examNo=")[1].split("&")[0];
    const classNo = pathname.split("classNo=")[1];

    // 학생 점수 리스트 api
    const classStudentTestApi = async () => {
        try {
            const res = await axios.get(
                `http://192.168.0.62:9988/api/exam/detail/${classNo}/${examNo}`,
            );
            console.log("testssss", res.data);
        } catch (error) {
            console.error("학생리스트를 찾아올 수 없습니다.", error);
        }
    };
    // 시험 통계 api
    const classTestSummaryApi = async () => {
        try {
            const res = await axios.get(
                `http://192.168.0.62:9988/api/class/exam/summary/${examNo}`,
            );
            console.log("통계", res.data);
        } catch (error) {
            console.error("통계를 찾아올 수 없습니다.", error);
        }
    };

    useEffect(() => {
        classStudentTestApi();
        classTestSummaryApi();
    }, []);

    const options = {
        chart: {
            type: "column",
            width: 800, // 원하는 너비값으로 설정
        },
        title: {
            align: "center",
            text: "",
        },
        accessibility: {
            announceNewData: {
                enabled: true,
            },
        },
        xAxis: {
            type: "category",
        },
        yAxis: {
            title: {
                text: "성적",
            },
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: "{point.y:.1f}점",
                },
            },
        },
        series: [
            {
                name: "점수",
                colorByPoint: true,
                data: [
                    {
                        name: "반평균",
                        y: 63.06,
                        color: "#F0F",
                    },
                    {
                        name: "최고점수",
                        y: 90,
                        color: "#F00",
                    },
                    {
                        name: "최저점수",
                        y: 4.18,
                        color: "#00F",
                    },
                ],
            },
        ],
    };
    return (
        <>
            <TSidebar />
            <TStudentTestDetailCss>
                <div className="testWrap">
                    <TStudentChartCss>
                        <div className="sectionChart">
                            <div className="headerChart">
                                <span>시험성적 통계</span>
                            </div>
                            <div className="chartWrap">
                                <HighchartsReact
                                    ref={chartRef}
                                    highcharts={Highcharts}
                                    oneToOne={true}
                                    options={options}
                                />
                                <ul>
                                    <li>
                                        <span>반 평균</span>
                                        <span className="score">753점</span>
                                    </li>
                                    <li>
                                        <span>최고</span>
                                        <span className="score">95점</span>
                                    </li>
                                    <li>
                                        <span>최저</span>
                                        <span className="score">35점</span>
                                    </li>
                                    <li className="seat">
                                        <span>석차</span>
                                        <ul>
                                            <li>
                                                <span>1등</span>
                                                <span>모모</span>
                                            </li>
                                            <li>
                                                <span>10등</span>
                                                <span>모모</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TStudentChartCss>
                    <TClassTestDetail />
                </div>
            </TStudentTestDetailCss>
        </>
    );
};

export default TStudentTestDetail;
