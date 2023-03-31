import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TClassCss from "./TClassCss";

import classList from "./ClassList.json";

import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";

import { RootState } from "../../../reducer/store";
import { useEffect, useState } from "react";

interface IList {
    name: string;
    grade: number;
    days: string;
    opendt: string;
    closedt: string;
}
interface CLassData {
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
        navigate(`/teacher/class/detail?no=${no}`);
    };
    const teacherId = useSelector((state: RootState) => state.user.id);
    const [classData, setClassData] = useState<CLassData["list"]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>("");
    const classListApi = async () => {
        const params: { page: number; keyword: string } = {
            page: 1,
            keyword: searchKeyword,
        };
        try {
            const response = await axios.get<CLassData>(
                `http://192.168.0.62:9988/api/class/${teacherId}`,
                { params: params },
            );
            setClassData(response.data.list);
        } catch (error) {
            console.error("err", error);
        }
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        classListApi();
    };
    useEffect(() => {
        classListApi();
    }, []);
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
                            {classData?.map(
                                (
                                    ele: {
                                        classNo: number;
                                        name: string;
                                        grade: number;
                                        days: string;
                                        opendt: string;
                                        closedt: string;
                                    },
                                    idx: number,
                                ) => {
                                    return (
                                        <tbody key={ele.classNo}>
                                            <tr className="tableMain">
                                                <td>
                                                    <span>{ele.classNo}</span>
                                                </td>
                                                <td>
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
                                                <td>
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
                                },
                            )}
                        </table>
                        <Pagination
                            count={10}
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
