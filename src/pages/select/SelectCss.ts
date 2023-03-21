import styled from "styled-components";
import { SmainCol, TmainCol } from "../../utils/Color";

const SelectCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin-bottom: 70px;
    }
    .student {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 50px;
        background: ${SmainCol};
        color: #fff;
        border-radius: 5px;
    }
    .teacher {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 50px;
        background: ${TmainCol};
        color: #fff;
        border-radius: 5px;
    }

    @media screen and (max-width: 428px) {
        .teacher {
            display: none;
        }
    }
`;

export default SelectCss;
