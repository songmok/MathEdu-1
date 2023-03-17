import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TClassCss from "./TClaaCss";

const TClass = () => {
    return (
        <>
            <TSidebar />
            <TClassCss>
                <header className="header">
                    <p className="title">클래스 관리</p>
                    <LogoutBt />
                </header>
            </TClassCss>
        </>
    );
};

export default TClass;
