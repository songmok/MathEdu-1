import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";
import { Button, mainContainer } from "../../../utils/Layout";

const TReferenceCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        height: 652px;
        position: relative;
        .sectionBt {
            display: flex;
            justify-content: end;
            margin-bottom: 10px;
            .deleteBt {
                ${Button}
                background: ${TmainCol};
            }
            .createBt {
                ${Button}
                background: ${TmainCol};
                margin-left: 10px;
            }
        }
        .pagination {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -15px);
            display: flex;
            justify-content: center;
            .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                background-color: ${TmainCol};
            }
        }
    }
`;

export default TReferenceCss;
