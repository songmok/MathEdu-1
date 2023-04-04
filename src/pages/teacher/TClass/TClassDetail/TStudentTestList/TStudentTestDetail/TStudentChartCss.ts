import styled from "@emotion/styled";
import { TfontCol } from "../../../../../../utils/Color";
export const TStudentChartCss = styled.div`
    .sectionChart {
        background-color: #fff;
        padding: 30px;
        border-radius: 15px;
        .headerChart {
            display: block;
            margin-bottom: 30px;
            span {
                padding-bottom: 15px;
                color: ${TfontCol};
                font-size: 18px;
            }
        }
        .chartWrap {
            display: flex;
            justify-content: space-between;
            width: 100%;
            ul {
                width: 33%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                > li {
                    width: 500px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding-bottom: 20px;
                    span {
                        font-size: 25px;
                    }
                    > span:first-child {
                        font-size: 30px;
                        color: ${TfontCol};
                    }
                    .score {
                        justify-self: start;
                    }
                }

                .seat {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    > span:first-child {
                        font-size: 30px;
                        margin-right: 20px;
                        color: ${TfontCol};
                    }

                    > ul {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        margin-left: 0;

                        > li {
                            list-style: none;
                            margin-top: 10px;
                            display: flex;
                            justify-content: space-between;
                            width: 290px;

                            span {
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
`;
