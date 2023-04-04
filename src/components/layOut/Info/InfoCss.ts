import styled from "styled-components";
import { SfontCol, TfontCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";
export const InfoCss = styled.div`
    ${mainContainer}
    .teacher {
        color: ${TfontCol};
    }
    .student {
        color: ${SfontCol};
    }
    .infoPage {
        position: relative;
        padding: 30px;
        height: 333px;
        border-radius: 15px;
        background-color: #fff;
        width: 100%;
        > div {
            display: flex;
            justify-content: space-between;
            h5 {
                font-weight: normal;
                font-size: 18px;
                margin-bottom: 30px;
            }
        }
        .info {
            display: flex;
            .profileImg {
                width: 135px;
                height: 175px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 100%;
                }
            }
            .infoGrid {
                width: 90%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-items: center;
                align-items: center;
                > li {
                    width: 300px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    justify-content: center;
                    position: relative;
                    .key {
                        position: absolute;
                        left: 0;
                        font-size: 20px;
                        display: block;
                    }
                    .data {
                        position: absolute;
                        left: 130px;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
`;
