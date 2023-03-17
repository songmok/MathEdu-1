import styled from "styled-components";
import { TfontCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";

const TReferenceCss = styled.div`
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

export default TReferenceCss;
