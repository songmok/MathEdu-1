import { TStudentTestDetailCss } from "./TStudentTestDetailCss";
import { useRef } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import highchartsMore from "highcharts/highcharts-more.js";
import TSidebar from "../../../../../../components/tSidebar/TSidebar";
highchartsMore(Highcharts);
const TStudentTestDetail = () => {
    const chartRef = useRef(null);
    const options = {
        chart: {
            type: "column",
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
                return (
                <div>
                    <HighchartsReact
                        ref={chartRef}
                        highcharts={Highcharts}
                        oneToOne={true}
                        options={options}
                    />
                </div>
                );
            </TStudentTestDetailCss>
        </>
    );
};

export default TStudentTestDetail;
