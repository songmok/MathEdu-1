import ReferenceForm from "../../../components/referenceForm/ReferenceForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TReferenceCss from "./TReferenceCss";

import Pagination from "@mui/material/Pagination";

import { useNavigate, useSearchParams } from "react-router-dom";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";
import Loading from "../../../components/loading/Loading";

export interface IReference {
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

const TReference = () => {
    const [handler, setHandler] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const user = useSelector((state: RootState) => state.user);
    const teacherNo = user.no;

    const [classNo, setClassNo] = useState(0);
    const [order, setOrder] = useState("desc");

    const [refLIst, setRefList] = useState<IReference>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const params = new URLSearchParams({
            page: refLIst?.currentPage.toString() ?? "",
            keyword: searchKeyword,
        });
        setSearchParams(params);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/bbs/${classNo}/${teacherNo}/${order}`,
                {
                    params: {
                        keyword: searchKeyword,
                        page: page,
                    },
                },
            );
            setRefList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, keyword, handler]);

    const deleteRef = async () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            try {
                const response = await axios.delete(
                    `http://192.168.0.62:9988/api/bbs/${bbsNos}/${teacherNo}`,
                );
                alert(response.data.message);
                setHandler(!handler);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const [checkedList, setCheckedList] = useState<number[]>([]);
    const bbsNos = checkedList.join(",");

    const goWrite = () => {
        navigate("/teacher/reference/write");
    };

    console.log(refLIst);

    return (
        <>
            <TSidebar />
            <TReferenceCss>
                {refLIst ? (
                    <section className="section">
                        <ReferenceForm
                            sectionTitle={"자료실"}
                            reference={refLIst}
                            checkedList={checkedList}
                            setCheckedList={setCheckedList}
                            setSearchKeyword={setSearchKeyword}
                            handleSubmit={handleSubmit}
                        />

                        <div className="sectionBt">
                            <button className="deleteBt" onClick={deleteRef}>
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
                                    to={`/teacher/reference?page=${item.page}`}
                                    {...item}
                                />
                            )}
                            count={refLIst.totalPage}
                            defaultPage={1}
                            color="secondary"
                            className="pagination"
                        />
                    </section>
                ) : (
                    <Loading />
                )}
            </TReferenceCss>
        </>
    );
};

export default TReference;
