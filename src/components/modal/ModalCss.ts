import styled from "styled-components";
import { SfontCol, SmainCol } from "../../utils/Color";

const ModalCss = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .modalBox {
        position: relative;
        display: flex;
        flex-direction: column;
        p {
            position: absolute;
            top: 50px;
            font-size: 20px;
            color: ${SfontCol};
        }
        .close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            color: ${SfontCol};
            background: none;
            font-size: 40px;
        }
        width: 500px;
        height: 600px;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
        background: white;
        border-radius: 15px;
        .changePw {
            display: flex;
            flex-direction: column;
            label {
                font-size: 16px;
                margin-bottom: 5px;
            }
            input {
                margin-bottom: 10px;
                border-radius: 5px;
                width: 250px;
                height: 40px;
                outline: none;
                padding: 5px 10px;
                font-size: 16px;
            }
            .submitBt {
                margin-top: 40px;
                width: 250px;
                height: 50px;
                background: ${SmainCol};
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 18px;
            }
        }
    }
`;

export default ModalCss;
