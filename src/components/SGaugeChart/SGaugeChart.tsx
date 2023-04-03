import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface Iprops {
    examType: {
        typeName: string;
    };
    gColors: {
        mainCol: string;
        backCol: string;
    };
    testResult?: {
        score: number;
        srank: number;
        tieCnt: number;
        totalStudents: number;
        testDt: string;
    };
}

const SGaugeChart = (props: Iprops) => {
    const score = props.testResult?.score ?? 0;

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
                    backgroundColor: props.gColors.backCol,
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
                        color: props.gColors.mainCol,
                        radius: "87%",
                        innerRadius: "63%",
                        y: score,
                    },
                ],
            },
        ],
    };

    const percentage = props.testResult?.totalStudents
        ? Math.floor(
              ((props.testResult?.srank ?? 0) /
                  props.testResult.totalStudents) *
                  100,
          )
        : 0;

    return (
        <div className="testType">
            <p className="subTitle">{props.examType.typeName}테스트</p>
            <div className="newTest">
                <div className="donutGraph">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={GaugeChart}
                    />
                    <span className="percentage">
                        <span>상위</span>
                        <p>
                            {percentage}
                            <span className="percent">%</span>
                        </p>
                    </span>
                </div>

                <ul className="gradeList">
                    <li className="gradeLR">
                        <span className="gradeLRC">점수</span>
                        <span className="gradeLRCI">{score}</span>
                    </li>

                    <li className="gradeLR">
                        <span className="gradeLRC">석차</span>
                        <span className="gradeLRCI">
                            {props.testResult?.srank ?? 0}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">동차석수</span>
                        <span className="gradeLRCI">
                            {props.testResult?.srank ?? 0}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">수강인원</span>
                        <span className="gradeLRCI">
                            {props.testResult?.srank ?? 0}
                        </span>
                    </li>
                    <li className="gradeLR">
                        <span className="gradeLRC">시험일자</span>
                        <span className="gradeLRCI">
                            {props.testResult?.srank ?? 0}
                            {props.testResult?.testDt}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SGaugeChart;
