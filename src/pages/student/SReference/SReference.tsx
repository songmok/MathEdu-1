import { useNavigate } from "react-router";
import SSidebar from "../../../components/sSidebar/SSidebar";
import SReferenceCss from "./SReferenceCss";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReferenceForm from "../../../components/referenceForm/ReferenceForm";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

import { IReference } from "../../teacher/TReference/TReference";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";

const SReference = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const [searchKeyword, setSearchKeyword] = useState<string>("");

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
                `http://192.168.0.62:9988/api/bbs/${user.classNo}/${user.teacherNo}/${order}`,
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
    }, [page, keyword]);

    const [checkedList, setCheckedList] = useState<number[]>([]);

    return (
        <>
            <SSidebar />
            <SReferenceCss>
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
                        <Pagination
                            renderItem={item => (
                                <PaginationItem
                                    component={Link}
                                    to={`/student/reference?page=${item.page}`}
                                    {...item}
                                />
                            )}
                            count={refLIst.totalPage}
                            defaultPage={1}
                            color="primary"
                            className="pagination"
                        />
                    </section>
                ) : (
                    <Loading />
                )}
            </SReferenceCss>
        </>
    );
};

export default SReference;
