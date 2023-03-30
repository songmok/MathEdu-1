import styled from "styled-components";

const LoadingCss = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    z-index: 999;
`;

export default LoadingCss;
