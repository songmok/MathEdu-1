import NoticeForm from "../../../components/noticeForm/NoticeForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

import Pagination from "@mui/material/Pagination";

import notice from "./notice.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
    const naviagate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const deleteNotice = async (no: number) => {
        try {
            const response = await axios.delete(
                `http://192.168.0.62:9988/api/notice/${result}/${no}`,
            );
            alert(response.data.message); // handle success response
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    const [checkedList, setCheckedList] = useState<number[]>([]);
    const result = checkedList.join(",");

    const goWrite = () => {
        naviagate("/teacher/notice/write");
    };

    return (
        <>
            <TSidebar />
            <TNoticeCss>
                <section className="section">
                    <NoticeForm
                        sectionTitle={"공지사항"}
                        notice={notice}
                        checkedList={checkedList}
                        setCheckedList={setCheckedList}
                    />
                    <div className="sectionBt">
                        <button
                            className="deleteBt"
                            onClick={() => deleteNotice(1)}
                        >
                            삭제
                        </button>
                        <button className="createBt" onClick={goWrite}>
                            작성
                        </button>
                    </div>
                    <Pagination
                        renderItem={item => (
                            <PaginationItem
                                component={Link}
                                to={`/teacher/notice?page=${notice.currentPage}`}
                                {...item}
                            />
                        )}
                        count={notice.totalPage}
                        defaultPage={1}
                        color="primary"
                        className="pagination"
                    />
                </section>
            </TNoticeCss>
        </>
    );
};

export default TNotice;
