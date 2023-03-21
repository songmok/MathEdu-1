import React from "react";
import LogoutBtCss from "./LogoutBtCss";

const LogoutBt = () => {
    return (
        <LogoutBtCss>
            <img className="profileImg" />
            <span>김채원</span>
            <img className="outImg" />
        </LogoutBtCss>
    );
};

export default LogoutBt;
