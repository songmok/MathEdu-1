import ReferenceForm from "../../../components/referenceForm/ReferenceForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TReferenceCss from "./TReferenceCss";

import Pagination from "@mui/material/Pagination";

import reference from "./reference.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
        author: {
            no: number;
            name: string;
        };
    }[];
}

const TReference = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const deleteRef = async (no: number) => {
        try {
            const response = await axios.delete(
                `http://192.168.0.62:9988/api/bbs/${result}/${no}`,
            );
            console.log(response.data); // handle success response
        } catch (error) {
            console.error(error); // handle error response
        }
    };

    const [checkedList, setCheckedList] = useState<number[]>([]);
    const result = checkedList.join(",");

    const goWrite = () => {
        navigate("/teacher/reference/write");
    };

    return (
        <>
            <TSidebar />
            <TReferenceCss>
                <section className="section">
                    <ReferenceForm
                        sectionTitle={"자료실"}
                        reference={reference}
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
                        count={reference.totalPage}
                        color="secondary"
                        className="pagination"
                    />
                </section>
            </TReferenceCss>
        </>
    );
};

export default TReference;
