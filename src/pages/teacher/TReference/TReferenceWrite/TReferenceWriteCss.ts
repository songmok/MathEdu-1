import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../utils/Color";
import { Button, mainContainer } from "../../../../utils/Layout";

const TReferenceWriteCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .sectionTop {
            margin-bottom: 10px;
            p {
                color: ${TfontCol};
                font-size: 20px;
                font-weight: 500;
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
            .file-area {
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                height: 42.45px;
                border: 1px solid #ccc;
                padding: 12px 15px;
            }
        }
        .sectionBt {
            display: flex;
            justify-content: end;
            .cancleBt {
                ${Button}
                background: ${TfontCol};
            }
            .completeBt {
                ${Button}
                background: ${TfontCol};
                margin-left: 10px;
            }
        }
    }
`;

export default TReferenceWriteCss;
