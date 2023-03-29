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
                font-size: 18px;
            }
        }
        .sectionMain {
            .title-area {
                textarea {
                    resize: none;
                    width: 100%;
                    height: 42.45px;
                    border: 1px solid #ccc;
                    padding: 12px 15px;
                }
            }
            .content-area {
                margin-bottom: 10px;
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
                background: ${TmainCol};
            }
            .completeBt {
                ${Button}
                background: ${TmainCol};
                margin-left: 10px;
            }
        }
    }
`;

export default TReferenceWriteCss;
