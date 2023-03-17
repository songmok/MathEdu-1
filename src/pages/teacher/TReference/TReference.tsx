import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TReferenceCss from "./TReferenceCss";

const TReference = () => {
    return (
        <>
            <TSidebar />
            <TReferenceCss>
                <header className="header">
                    <p className="title">자료실</p>
                    <LogoutBt />
                </header>
            </TReferenceCss>
        </>
    );
};

export default TReference;
