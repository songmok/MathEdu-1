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
            padding: 30px 0;
            display: flex;
            justify-content: center;
            form {
                display: flex;
                flex-direction: column;
                div {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    align-items: center;
                    position: relative;
                    label {
                        display: inline-block;
                        line-height: 40px;
                        font-size: 20px;
                        width: 150px;
                        color: ${TfontCol};
                    }
                    input {
                        width: 300px;
                        height: 40px;
                        padding: 5px 10px;
                        border: 2px solid #d9d9d9;
                        border-radius: 5px;
                    }
                    select {
                        height: 40px;
                        padding: 5px 10px;
                        border: 2px solid #d9d9d9;
                        border-radius: 5px;
                    }
                    .nameBt {
                        position: absolute;
                        right: -5px;
                        ${Button}
                        background: ${TmainCol};
                    }
                    .userCheck {
                        width: 300px;
                        .username {
                            width: 220px;
                        }
                    }
                    .birthday {
                        width: 300px;
                    }
                    .school {
                        width: 300px;
                    }
                    .classroom {
                        width: 300px;
                    }
                }
                .signBt {
                    margin: 0 auto;
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
