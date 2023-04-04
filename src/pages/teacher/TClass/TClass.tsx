import TSidebar from "../../../components/tSidebar/TSidebar";
import TClassCss from "./TClassCss";

import Pagination from "@mui/material/Pagination";

import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

import { RootState } from "../../../reducer/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

interface IClassData {
    currentPage: number;
    keyword: string;
    list: {
        classNo: number;
        name: string;
        grade: number;
        days: string;
        opendt: string;
        closedt: string;
    }[];
    totalCount: number;
    totalPage: number;
}

const TClass = () => {
    const navigate = useNavigate();
    const goClassDetail = (no: number) => {
        console.log(no);
        navigate(`/teacher/class/detail?classno=${no}`);
    };
    const teacherId = useSelector((state: RootState) => state.user.id);
    const [classData, setClassData] = useState<IClassData["list"]>([]);
    const [classpages, setClasspages] = useState();
    const [currentPage, setCurrentPage] = useState("");
    const [searchKeyword, setSearchKeyword] = useState<string>("");

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") || 1;
    const keyword = searchParams.get("keyword") || "";

    const classListApi = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/class/${teacherId}`,
                { params: { page, keyword } },
            );
            setClassData(response.data.list);
            setClasspages(response.data.totalPage);
            console.log("page", response.data.currentPage);
            setCurrentPage(response.data.currentPage);
        } catch (error) {
            console.error("err", error);
        }
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setSearchParams({
            page: currentPage.toString(),
            keyword: searchKeyword,
        });
    };
    useEffect(() => {
        classListApi();
    }, [keyword, page]);
    return (
        <>
            <TSidebar />
            <TClassCss>
                <section className="section">
                    <div className="sectionTop">
                        <p>클래스 리스트</p>
                        <div className="search">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchKeyword}
                                    onChange={e =>
                                        setSearchKeyword(e.target.value)
                                    }
                                    className="searchBox"
                                />
                                <button type="submit" className="searchBt">
                                    검색
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sectionMain">
                        <table className="table">
                            <thead>
                                <tr className="tableHeader">
                                    <th>번호</th>
                                    <th>반</th>
                                    <th>요일</th>
                                    <th>학년</th>
                                    <th>개강일</th>
                                    <th>종강일</th>
                                </tr>
                            </thead>
                            {classData.map(ele => {
                                return (
                                    <tbody key={ele.classNo}>
                                        <tr className="tableMain">
                                            <td style={{ width: "5%" }}>
                                                <span>{ele.classNo}</span>
                                            </td>
                                            <td style={{ width: "25%" }}>
                                                <span
                                                    className="className"
                                                    onClick={() => {
                                                        goClassDetail(
                                                            ele.classNo,
                                                        );
                                                    }}
                                                >
                                                    {ele.name}
                                                </span>
                                            </td>
                                            <td>
                                                <span>{ele.grade}</span>
                                            </td>
                                            <td style={{ width: "15%" }}>
                                                <span>{ele.days}</span>
                                            </td>
                                            <td>
                                                <span>
                                                    {ele.opendt
                                                        .toString()
                                                        .slice(0, 10)}
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    {ele.closedt
                                                        .toString()
                                                        .slice(0, 10)}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                        <Pagination
                            renderItem={item => (
                                <PaginationItem
                                    component={Link}
                                    to={`/teacher/class?page=${item.page}`}
                                    {...item}
                                />
                            )}
                            count={classpages}
                            color="secondary"
                            className="pagination"
                        />
                    </div>
                </section>
            </TClassCss>
        </>
    );
};

export default TClass;
