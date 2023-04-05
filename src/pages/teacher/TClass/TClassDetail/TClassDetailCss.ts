import styled from "styled-components";
import { mainContainer } from "../../../../utils/Layout";
export const TClassDetailCss = styled.section`
    width: 95%;
    .top {
        ${mainContainer}
        display: grid;
        grid-template-columns: 30% 60%;
        gap: 30px;
        @media screen and (max-width: 1900px) {
        }
    }
`;
