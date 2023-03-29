import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { SfontCol } from "../../../utils/Color";

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
    .tests {
        display: flex;
        gap: 30px;
        .weekT {
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

                    .gradeLR::before {
                        position: absolute;
                        content: "";

                        left: 0px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background: ${SfontCol};
                    }
                    .gradeLR {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        margin-left: 30px;
                        .gradeLRC {
                            color: ${SfontCol};
                        }
                    }
                }
            }
        }
        .monthT {
            padding: 30px;
            width: 520px;
            height: 320px;
            border-radius: 15px;
            background: #fff;
        }
    }
    .analysis {
        margin-top: 30px;
        padding: 30px;
        width: calc(520px * 2 + 30px);
        border-radius: 15px;
        background: #fff;
    }

    .table {
        border-radius: 5px;
        width: 100%;
        text-align: center;
        .tableHeader {
            background: ${SfontCol};
            color: #fff;
            border: none;
            height: 50px;
        }
        .tableMain {
            height: 40px;
        }
    }
    /* .pagination {
                display: flex;
                justify-content: center;
            } */
`;

export default SGradeCss;
