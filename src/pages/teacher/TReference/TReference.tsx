import ReferenceForm from "../../../components/referenceForm/ReferenceForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TReferenceCss from "./TReferenceCss";

import Pagination from "@mui/material/Pagination";

import reference from "./reference.json";
import { useNavigate, useSearchParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const user = useSelector((state: RootState) => state.user);
    const teacherNo = user.no;

    const [classNo, setClassNo] = useState(0);
    const [order, setOrder] = useState("asc");

    const [refLIst, setRefList] = useState<IReference>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/bbs/${classNo}/${teacherNo}/${order}`,
                {
                    params: {
                        keyword: "",
                        page: "",
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
    }, []);

    const deleteRef = async (teacherNo: number) => {
        try {
            const response = await axios.delete(
                `http://192.168.0.62:9988/api/bbs/${bbsNos}/${teacherNo}`,
            );
            console.log(response.data); // handle success response
        } catch (error) {
            console.error(error); // handle error response
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
                        />

                        <div className="sectionBt">
                            <button
                                className="deleteBt"
                                onClick={() => deleteRef(1)}
                            >
                                삭제
                            </button>
                            <button className="createBt" onClick={goWrite}>
                                작성
                            </button>
                        </div>
                        <Pagination
                            count={refLIst.totalPage}
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
