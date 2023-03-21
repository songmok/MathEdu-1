import LogoutBt from "../../../components/logoutBt/LogoutBt";
import NoticeForm from "../../../components/noticeForm/NoticeForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

import notice from "./notice.json";

export interface INotice {
    status: boolean;
    totalPage: number;
    currentPage: number;
    totalCount: number;
    keyword: string;
    list: {
        no: number;
        category: string;
        title: string;
        regDt: string;
        author: {
            no: number;
            name: string;
        };
    }[];
}

const TNotice = () => {
    return (
        <>
            <TSidebar />
            <TNoticeCss>
                <header className="header">
                    <p className="title">공지사항</p>
                    <LogoutBt />
                </header>
                <section className="section">
                    <NoticeForm sectionTitle={"공지사항"} notice={notice} />
                </section>
            </TNoticeCss>
        </>
    );
};

export default TNotice;
