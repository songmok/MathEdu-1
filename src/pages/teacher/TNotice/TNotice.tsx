import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

const TNotice = () => {
    return (
        <>
            <TSidebar />
            <TNoticeCss>
                <header className="header">
                    <p className="title">공지사항</p>
                    <LogoutBt />
                </header>
            </TNoticeCss>
        </>
    );
};

export default TNotice;
