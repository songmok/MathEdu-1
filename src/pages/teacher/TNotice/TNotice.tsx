import TSidebar from "../../../components/TSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

const TNotice = () => {
    return (
        <>
            <TSidebar />
            <TNoticeCss>
                <p className="title">공지사항</p>
            </TNoticeCss>
        </>
    );
};

export default TNotice;
