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
                padding-bottom: 18px;
                color: ${TfontCol};
                font-size: 18px;
            }
        }
        .chartWrap {
            display: flex;
            justify-content: space-between;
            width: 100%;
            justify-content: space-between;

            > ul {
                width: 20%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                > li {
                    width: 200px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding-bottom: 20px;
                    align-items: center;
                    span {
                        font-size: 15px;
                    }
                    > span:first-of-type {
                        font-size: 20px;
                        color: ${TfontCol};
                        position: relative;
                        &::after {
                            position: absolute;
                            content: "";
                            top: 50%;
                            transform: translateY(-50%);
                            left: -15px;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background: ${TfontCol};
                        }
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
                    > span:first-of-type {
                        font-size: 20px;
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
                            width: 150px;
                            align-items: center;
                            padding-bottom: 10px;
                            span {
                                font-size: 15px;
                            }
                            > span:first-of-type {
                                font-size: 15px;
                                color: ${TfontCol};
                            }
                        }
                    }
                }
            }
        }
    }
`;
