import { mainContainer } from "../../utils/Layout";
import styled from "styled-components";
import { TfontCol } from "../../utils/Color";
import { Button } from "../../utils/Layout";
const SGaugeChartCss = styled.div`
    .tests {
        .subTitle {
            color: ${TfontCol};
            font-size: 18px;
        }
        display: flex;
        gap: 30px;
        .testType {
            padding: 30px;
            width: 50%;
            height: 100%;
            border-radius: 15px;
            background: #fff;
            .newTest {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .donutGraph {
                    position: relative;
                    width: 50%;

                    .percentage {
                        display: flex;
                        flex-direction: column;
                        font-size: 36px;
                        font-weight: 600;
                        line-height: 36px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: ${TfontCol};
                        > span {
                            font-size: 14px;
                            font-weight: 400;
                            text-align: center;
                            line-height: 18px;
                        }
                        .percent {
                            font-size: 20px;
                            font-weight: 500;
                        }
                    }
                }
                .gradeList {
                    position: relative;
                    display: block;
                    width: 50%;

                    .gradeLR {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        margin-left: 30px;

                        .gradeLRC {
                            text-align: left;
                            color: ${TfontCol};
                        }
                        .gradeLRC::after {
                            position: absolute;
                            content: "";
                            transform: translateY(8px);
                            left: 15px;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background: ${TfontCol};
                        }
                    }
                }
            }
        }
    }
`;

export default SGaugeChartCss;
