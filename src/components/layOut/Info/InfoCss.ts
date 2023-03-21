import styled from "styled-components";
import { SfontCol, TfontCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";
export const InfoCss = styled.div`
    ${mainContainer}
    .title {
        font-size: 25px;
        margin-bottom: 30px;
    }
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
        border-radius: 30px;
        background-color: #fff;
        h5 {
            font-weight: normal;
            font-size: 18px;
            color: ${SfontCol};
            margin-bottom: 30px;
        }
        .info {
            display: flex;
            .profileImg {
                width: 135px;
                height: 175px;
                background-color: pink;
                .img {
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
                        color: ${SfontCol};
                        font-size: 20px;
                        display: block;
                    }
                    .data {
                        position: absolute;
                        left: 130px;
                    }
                }
            }
        }
    }
`;
