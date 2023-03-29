import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";

const TLoginCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 50px;
        color: ${TfontCol};
    }
    form {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        .id-form {
            margin-bottom: 10px;
            border-radius: 5px;
            width: 350px;
            height: 40px;
            padding: 5px 10px;
        }
        .pass-form {
            border-radius: 5px;
            width: 350px;
            height: 40px;
            padding: 5px 10px;
        }
    }
    .loginBt {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 50px;
        background: ${TmainCol};
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
`;

export default TLoginCss;
