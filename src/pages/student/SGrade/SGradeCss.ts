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

                    .aa {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                    }
                }
                .gradeList {
                    position: relative;
                    display: block;
                    width: 50%;

                    .gradeLR::before {
                        position: absolute;
                        content: "";
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background: #000;
                    }
                    .gradeLR {
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 10px;
                        margin-left: 30px;
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
`;

export default SGradeCss;
