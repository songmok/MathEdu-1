import NoticeForm from "../../../components/noticeForm/NoticeForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TNoticeCss from "./TNoticeCss";

import Pagination from "@mui/material/Pagination";

import notice from "./notice.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";
import Loading from "../../../components/loading/Loading";

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
        authorName: string;
        authorNo: number;
    }[];
}

const TNotice = () => {
    const naviagate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const user = useSelector((state: RootState) => state.user);
    const teacherNo = user.no;

    const [classNo, setClassNo] = useState(0);
    const [order, setOrder] = useState("asc");

    const [notiLIst, setNotiList] = useState<INotice>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/notice/${classNo}/${teacherNo}/${order}`,
                {
                    params: {
                        keyword: "",
                        page: "",
                    },
                },
            );
            setNotiList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteNotice = async () => {
        try {
            const response = await axios.delete(
                `http://192.168.0.62:9988/api/notice/${noticeNos}/${teacherNo}`,
            );
            alert(response.data.message); // handle success response
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    const [checkedList, setCheckedList] = useState<number[]>([]);
    const noticeNos = checkedList.join(",");

    const goWrite = () => {
        naviagate("/teacher/notice/write");
    };

    return (
        <>
            <TSidebar />
            <TNoticeCss>
                {notiLIst ? (
                    <section className="section">
                        <NoticeForm
                            sectionTitle={"공지사항"}
                            notice={notiLIst}
                            checkedList={checkedList}
                            setCheckedList={setCheckedList}
                        />
                        <div className="sectionBt">
                            <button className="deleteBt" onClick={deleteNotice}>
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
                            count={notiLIst.totalPage}
                            defaultPage={1}
                            color="primary"
                            className="pagination"
                        />
                    </section>
                ) : (
                    <Loading />
                )}
            </TNoticeCss>
        </>
    );
};

export default TNotice;
