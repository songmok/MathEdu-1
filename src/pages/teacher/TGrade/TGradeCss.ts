import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { TfontCol } from "../../../utils/Color";

const TGradeCss = styled.div`
    ${mainContainer}
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            color: ${TfontCol};
            font-size: 25px;
        }
    }
`;

export default TGradeCss;
