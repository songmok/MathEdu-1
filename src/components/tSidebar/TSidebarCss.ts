import { TmainCol } from "../../utils/Color";
import styled from "styled-components";

const TSidebarCss = styled.div`
    position: fixed;
    height: 100vh;
    width: 250px;
    background-color: ${TmainCol};
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
        a:after {
            content: "";
            display: inline-block;
            width: 100%;
            height: 0px;
        }
        a:before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 0px;
        }
        .active {
            width: 100%;
            background-color: #363469;
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
    .signup {
        width: 100%;
        position: absolute;
        bottom: -500px;
        cursor: pointer;
        color: white;
        padding: 0 70px 0 60px;
        img {
            position: absolute;
            top: 49%;
            transform: translateY(-50%);
            right: 50px;
            width: 8px;
            height: 8px;
        }
    }
`;

export default TSidebarCss;
