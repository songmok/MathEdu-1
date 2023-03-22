import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";
import { Button, mainContainer } from "../../../utils/Layout";

const TNoticeCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
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
            display: flex;
            justify-content: center;
        }
    }
`;

export default TNoticeCss;
