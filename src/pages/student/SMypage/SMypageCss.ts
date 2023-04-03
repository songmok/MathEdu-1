import styled from "styled-components";
import { SfontCol, SmainCol } from "../../../utils/Color";
import { Button, mainContainer } from "../../../utils/Layout";

const SMypageCss = styled.div`
    button {
        border: none;
        height: 30px;
        width: 100px;
        background: ${SmainCol};
        border-radius: 5px;
        cursor: pointer;
        color: white;
    }
`;

export default SMypageCss;
