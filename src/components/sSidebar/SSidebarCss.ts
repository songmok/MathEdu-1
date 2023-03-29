import { SmainCol } from "../../utils/Color";
import styled from "styled-components";

const SidebarCss = styled.div`
    position: fixed;
    height: 100vh;
    width: 250px;
    background-color: ${SmainCol};
    border-radius: 0 30px 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 80px 0;
        span {
            color: white;
        }
        img {
            background-size: cover;
        }
    }
    .menu {
        display: flex;
        flex-direction: column;
        text-align: justify;
        width: 100%;
        a {
            position: relative;
            padding: 0 70px 0 60px;
            .menuTitle {
                color: #fff;
                font-size: 16px;
            }
        }
        
        .active {
            width: 100%;
            background-color: #03716a;
        }
        img {
            position: absolute;
            top: 49%;
            transform: translateY(-50%);
            right: 40px;
            width: 8px;
            height: 8px;
        }
    }
`;

export default SidebarCss;
