import SSidebar from "../../../components/sSidebar/SSidebar";
import SNoticeCss from "./SNotiecCss";

const SNotice = () => {
    return (
        <>
            <SSidebar />
            <SNoticeCss>
                <p className="title">공지사항</p>
            </SNoticeCss>
        </>
    );
};

export default SNotice;
