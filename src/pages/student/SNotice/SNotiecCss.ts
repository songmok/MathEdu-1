import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { SfontCol } from "../../../utils/Color";

const SNoticeCss = styled.div`
    ${mainContainer}
    .title {
        color: ${SfontCol};
        font-size: 25px;
    }
`;

export default SNoticeCss;
