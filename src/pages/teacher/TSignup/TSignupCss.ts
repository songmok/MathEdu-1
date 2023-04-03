import styled from "styled-components";
import { Button, mainContainer } from "../../../utils/Layout";
import { TfontCol, TmainCol } from "../../../utils/Color";

const TSignupCss = styled.div`
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
            form {
                display: flex;
                flex-direction: column;
                div {
                    label {
                        display: inline-block;
                        font-size: 16px;
                        width: 150px;
                        color: ${TfontCol};
                    }
                    .nameBt {
                        ${Button}
                        background: ${TmainCol};
                    }
                }
                .username {
                    display: flex;
                }
                .signBt {
                    color: white;
                    background: ${TmainCol};
                    width: 350px;
                    height: 50px;
                    background: ${TmainCol};
                    color: #fff;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 50px;
                }
            }
        }
    }
`;

export default TSignupCss;
