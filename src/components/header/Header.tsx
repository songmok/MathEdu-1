import { useLocation } from "react-router";
import LogoutBt from "../logoutBt/LogoutBt";
import HeaderCss from "./HeaderCss";

const Header = () => {
    const location = useLocation();
    if (
        location.pathname === "/" ||
        location.pathname === "/student/login" ||
        location.pathname === "/teacher/login"
    )
        return null;

    return (
        <HeaderCss>
            <header className="header">
                <p className="Stitle">반 이름이 들어갈 자리입니다</p>
                <LogoutBt />
            </header>
        </HeaderCss>
    );
};

export default Header;
