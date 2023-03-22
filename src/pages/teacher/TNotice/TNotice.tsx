import LogoutBt from "../../../components/logoutBt/LogoutBt";
import NoticeForm from "../../../components/noticeForm/NoticeForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

import Pagination from "@mui/material/Pagination";

import notice from "./notice.json";
import { useSearchParams } from "react-router-dom";

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
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    return (
        <>
            <TSidebar />
            <TNoticeCss>
                <section className="section">
                    <NoticeForm sectionTitle={"공지사항"} notice={notice} />
                    <div className="sectionBt">
                        <button className="deleteBt">삭제</button>
                        <button className="createBt">작성</button>
                    </div>
                    <Pagination
                        count={notice.totalPage}
                        color="secondary"
                        className="pagination"
                    />
                </section>
            </TNoticeCss>
        </>
    );
};

export default TNotice;
