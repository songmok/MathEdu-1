import styled from "styled-components";
import { TfontCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";

const TNoticeCss = styled.div`
    ${mainContainer}
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            color: ${TfontCol};
            font-size: 25px;
        }
    }
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
    }
`;

export default TNoticeCss;
