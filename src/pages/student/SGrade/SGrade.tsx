import SSidebar from "../../../components/sSidebar/SSidebar";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import SGradeCss from "./SGradeCss";
import { useRef } from "react";

const SGrade = () => {
    const chartRef = useRef(null);

    const data = [30, 40, 50, 90, 60];

    const options = {
        title: {
            text: "월간테스트 결과",
        },
        xAxis: {
            title: {
                text: "Month",
            },
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yAxis: {
            title: {
                text: "점수",
            },
        },
        series: [
            {
                name: "오한수",
                data: data,
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
                        <HighchartsReact
                            ref={chartRef}
                            highcharts={Highcharts}
                            oneToOne={true}
                            options={options}
                        />
                    </div>
                    <div className="monthT">
                        <p className="subTitle">월간 테스트</p>
                    </div>
                </div>
                <div>
                    <p className="subTitle">성적 분석</p>
                </div>
            </SGradeCss>
        </>
    );
};

export default SGrade;
