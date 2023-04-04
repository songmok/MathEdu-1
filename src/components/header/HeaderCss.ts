import styled from "styled-components";
import { SfontCol, TfontCol } from "../../utils/Color";

const HeaderCss = styled.div`
    position: absolute;
    width: calc(100% - 250px);
    padding: 30px 30px 15px 30px;
    margin-left: 250px;
    .header {
        display: flex;
        justify-content: space-between;
        align-itmes: center;

        .Ttitle {
            color: ${TfontCol};
            font-size: 25px;
        }
        .Stitle {
            color: ${SfontCol};
            font-size: 25px;
        }
    }
`;

export default HeaderCss;
