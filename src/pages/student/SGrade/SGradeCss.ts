import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { SfontCol } from "../../../utils/Color";

const SGradeCss = styled.div`
    ${mainContainer}
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            color: ${SfontCol};
            font-size: 25px;
        }
    }
    .subTitle {
        color: ${SfontCol};
        font-size: 18px;
    }
    .tests {
        display: flex;
        gap: 30px;
        .weekT {
            padding: 30px;
            width: 520px;
            height: 320px;
            border-radius: 15px;
            background: #fff;
        }
        .monthT {
            padding: 30px;
            width: 520px;
            height: 320px;
            border-radius: 15px;
            background: #fff;
        }
    }
`;

export default SGradeCss;
