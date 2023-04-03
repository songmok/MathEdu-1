import styled from "styled-components";
import { SfontCol, SmainCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";

const SReferenceCss = styled.div`
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

export default SReferenceCss;
