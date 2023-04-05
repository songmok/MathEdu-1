import { Button } from "./../../../../utils/Layout";
import { TmainCol } from "./../../../../utils/Color";
import styled from "styled-components";
import { TfontCol } from "../../../../utils/Color";
import { mainContainer } from "../../../../utils/Layout";

const TReferencePostCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .section-title {
            color: ${TfontCol};
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: 500;
        }
        .notice-board {
            border-top: 2px solid ${TfontCol};
            .title-area {
                display: flex;
                align-items: center;
                margin: 5px 0;
                padding: 10px;
                span {
                    font-size: 14px;
                    background: lightgray;
                    padding: 2px 5px;
                    margin-right: 10px;
                }
                .title {
                    font-size: 25px;
                }
            }
            .info-area {
                margin: 5px 0;
                display: flex;
                border-bottom: 1px solid lightgray;
                padding: 10px;
                p {
                    font-size: 16px;
                    color: #000;
                    margin-right: 20px;
                    span {
                        margin-left: 10px;
                    }
                }
            }
            .content-area {
                padding: 30px 10px;
                height: 400px;
                p {
                    font-size: 16px;
                    color: #000;
                }
            }
            .file-area {
                padding: 10px;
                border-top: 1px solid lightgray;
                font-size: 14px;
                display: flex;
                .file {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                }
                .file-list {
                    display: flex;
                    flex-direction: column;
                }
            }

            .prevnext-area {
                display: flex;
                flex-direction: column;
                padding: 10px;
                border-top: 1px solid lightgray;
                .prev {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #777;
                    .prev-title {
                        font-size: 16px;
                        color: #000;
                        margin-left: 10px;
                        cursor: pointer;
                        :hover {
                            text-decoration: underline;
                        }
                    }
                    .prev-titleNo {
                        font-size: 16px;
                        color: #000;
                        margin-left: 10px;
                    }
                }
                .next {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #777;
                    .next-title {
                        font-size: 16px;
                        color: #000;
                        margin-left: 10px;
                        cursor: pointer;
                        :hover {
                            text-decoration: underline;
                        }
                    }
                    .next-titleNo {
                        font-size: 16px;
                        color: #000;
                        margin-left: 10px;
                    }
                }
            }
            .button-area {
                padding: 10px;
                display: flex;
                justify-content: space-between;
                border-top: 2px solid ${TfontCol};
                .listBt {
                    ${Button}
                    background: ${TfontCol};
                }
                .button-right {
                    display: flex;
                    .deleteBt {
                        ${Button}
                        background: ${TfontCol};
                    }
                    .modifyBt {
                        ${Button}
                        background: ${TfontCol};
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`;

export default TReferencePostCss;
