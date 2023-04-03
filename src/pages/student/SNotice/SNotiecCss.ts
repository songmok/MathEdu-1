import { mainContainer } from "./../../../utils/Layout";
import styled from "styled-components";
import { SfontCol, SmainCol } from "../../../utils/Color";

const SNoticeCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
    }
    .pagination {
        display: flex;
        justify-content: center;
        .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
            background-color: ${SmainCol};
        }
    }
`;

export default SNoticeCss;
