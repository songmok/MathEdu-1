import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";
import { Button, mainContainer } from "../../../utils/Layout";

const TNoticeCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        position: relative;
        padding: 30px;
        border-radius: 15px;
        height: 652px;
        .sectionBt {
            display: flex;
            justify-content: end;
            margin-bottom: 10px;
            .deleteBt {
                ${Button}
                background: ${TfontCol};
            }
            .createBt {
                ${Button}
                background: ${TfontCol};
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
            .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                background-color: ${TfontCol};
            }
        }
    }
`;

export default TNoticeCss;
