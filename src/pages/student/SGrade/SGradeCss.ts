import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { SfontCol } from "../../../utils/Color";
import { Button } from "../../../utils/Layout";

const SGradeCss = styled.div`
    ${mainContainer}
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            color: ${SfontCol};
            font-size: 25px;
        }
    }
    .subTitle {
        color: ${SfontCol};
        font-size: 18px;
    }
    .flexForm {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-bottom: 30px;
        select {
            margin: 0 10px;
            height: 30px;
            font-size: 14px;
            padding: 0 5px;
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            ::selection {
                border: none;
            }
        }
    }
    .tests {
        display: flex;
        gap: 30px;
        .testType {
            padding: 30px;
            width: 520px;
            height: 320px;
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
                        font-size: 36px;
                        font-weight: 600;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: ${SfontCol};
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
                            color: ${SfontCol};
                        }
                        .gradeLRC::after {
                            position: absolute;
                            content: "";
                            transform: translateY(8px);
                            left: 15px;
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background: ${SfontCol};
                        }
                    }
                }
            }
        }
    }
    .analysis {
        margin-top: 30px;
        padding: 30px;
        width: calc(520px * 2 + 30px);
        border-radius: 15px;
        background: #fff;
        .chtitle {
            display: flex;
            gap: 15px;
            .chbt {
                background: none;
                border: none;
                cursor: pointer;
                color: #d9d9d9;

                :hover {
                    color: #c3c3c3;
                }
            }
        }
    }

    .table {
        margin-top: 30px;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        .tableHeader {
            background: ${SfontCol};
            color: #fff;
            border: none;
            height: 50px;
            border-radius: 20px;
        }
        .tableMain {
            height: 40px;
        }
    }
    /* .pagination {
                display: flex;
                justify-content: center;
            } */

    .submitBt {
        ${Button}
        background: ${SfontCol};
        margin-left: 15px;
    }
`;

export default SGradeCss;
