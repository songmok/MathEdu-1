import SSidebar from "../../../components/sSidebar/SSidebar";
import SNoticeCss from "./SNotiecCss";

import axios from "axios";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { INotice } from "../../teacher/TNotice/TNotice";
import { Pagination, PaginationItem } from "@mui/material";
import Loading from "../../../components/loading/Loading";
import NoticeForm from "../../../components/noticeForm/NoticeForm";
import { Link } from "react-router-dom";
import { RootState } from "../../../reducer/store";
import { useSelector } from "react-redux";

export interface SInotice {
    no: string;
    img: string;
    name: string;
    phone: string;
    alternatephone: string;
    address: string;
}
export interface SInoticeHeader {
    number: string;
    picture: string;
    student: string;
    phone: string;
    parentPhone: string;
    address: string;
}

const SNotice = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const [order, setOrder] = useState("desc");

    const [notiList, setNotiList] = useState<INotice>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const params = new URLSearchParams({
            page: notiList?.currentPage.toString() ?? "",
            keyword: searchKeyword,
        });
        setSearchParams(params);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/notice/${user.classNo}/${user.teacherNo}/${order}`,
                {
                    params: {
                        keyword: searchKeyword,
                        page: page,
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
    }, [page, keyword]);

    const [checkedList, setCheckedList] = useState<number[]>([]);

    return (
        <>
            <SSidebar />
            <SNoticeCss>
                {notiList ? (
                    <section className="section">
                        <NoticeForm
                            sectionTitle={"공지사항"}
                            notice={notiList}
                            checkedList={checkedList}
                            setCheckedList={setCheckedList}
                            setSearchKeyword={setSearchKeyword}
                            handleSubmit={handleSubmit}
                        />
                        <Pagination
                            renderItem={item => (
                                <PaginationItem
                                    component={Link}
                                    to={`/student/notice?page=${item.page}`}
                                    {...item}
                                />
                            )}
                            count={notiList.totalPage}
                            defaultPage={1}
                            color="primary"
                            className="pagination"
                        />
                    </section>
                ) : (
                    <Loading />
                )}
            </SNoticeCss>
        </>
    );
};

export default SNotice;
