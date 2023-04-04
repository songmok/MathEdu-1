import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../utils/Color";
import { Button, mainContainer } from "../../../../utils/Layout";

const TNoticeFixCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .sectionTop {
            margin-bottom: 10px;
            p {
                color: ${TfontCol};
                font-size: 18px;
            }
        }
        .sectionMain {
            .title-area {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                margin-right: unset;
                gap: 10px;
                width: auto;
                textarea {
                    resize: none;
                    width: 75%;
                    height: 50px;
                    line-height: 50px;
                    border: 1px solid #ccc;
                    padding: 0 15px;
                    font-size: 15px;
                    white-space: nowrap;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    outline: none;
                }
                select {
                    width: 25%;
                    background-color: white;
                    color: black;
                    border: 1px solid #ccc;
                    padding: 0 5px;
                    font-size: 15px;
                    outline: none;
                }
            }
            .content-area {
                margin-bottom: 10px;
                .ql-editor {
                    height: 400px;
                }
            }
            .old-file {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                padding: 12px 15px;
                .xBt {
                    height: 15px;
                    width: 15px;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }
            .file-area {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                padding: 12px 15px;
            }
        }
        .sectionBt {
            display: flex;
            justify-content: end;
            .cancleBt {
                ${Button}
                background: ${TmainCol};
            }
            .fixBt {
                ${Button}
                background: ${TmainCol};
                margin-left: 10px;
            }
        }
    }
`;

export default TNoticeFixCss;
