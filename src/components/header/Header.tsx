import { useLocation } from "react-router";
import LogoutBt from "../logoutBt/LogoutBt";
import HeaderCss from "./HeaderCss";

const Header = () => {
    const location = useLocation();
    if (location.pathname === "/") return null;
    if (location.pathname === "/student/login") return null;
    if (location.pathname === "/teacher/login") return null;

    return (
        <HeaderCss>
            <header className="header">
                <p className="Stitle">한수 관리 시스템</p>
                <LogoutBt />
            </header>
        </HeaderCss>
    );
};

export default Header;
