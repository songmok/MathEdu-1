import { Pagination, PaginationItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import { TExamInfo } from "../../../../../components/tclassDetail/TClassTest/TClassTest";
import TSidebar from "../../../../../components/tSidebar/TSidebar";
import { TStudentTestListCss } from "./TStudentTestListCss";
export interface ITheader {
    no: string;
    title: string;
    attend: string;
    average: string;
    examdt: string;
}

const TStudentTestList = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    const goClassTest = (no: number) => {
        Navigate(`/teacher/class/detail/test/${no}`);
    };
    const classQuNo = location.search.split("classno=")[1];

    const [testList, setTestList] = useState<TExamInfo[]>([]);
    const [examType, setExamType] = useState<string>("all");
    const [orderType, setOrderType] = useState("examName");
    const [order, setOrder] = useState("asc");
    const [testPages, setTestPages] = useState();
    const headerList: ITheader = {
        no: "번호",
        title: "시험과목",
        attend: "참석인원",
        average: "평균점수",
        examdt: "날짜",
    }; //반 학생 헤더
    const classStudentInfoApi = async () => {
        try {
            const res = await axios.get(
                `http://192.168.0.62:9988/api/exam/list/${examType}/${classQuNo}/${orderType}/${order}`,
            );
            // console.log("test", res.data);
            setTestPages(res.data.currentPage);
            setTestList(res.data.list);
        } catch (error) {
            console.error("시험리스트를 찾아올 수 없습니다.", error);
        }
    };
    const handleExamTypeChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ) => {
        console.log("examType", examType);
        setExamType(event.target.value as string);
    };
    const handleOrderTypeChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ) => {
        console.log("orderType", orderType);
        setOrderType(event.target.value as string);
    };
    const handleOrderChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ) => {
        console.log("order", order);
        setOrder(event.target.value as string);
    };
    useEffect(() => {
        classStudentInfoApi();
    }, [examType, orderType, order]);
    return (
        <>
            <TSidebar />
            <TStudentTestListCss>
                <div className="header">
                    <span>전체 시험 리스트</span>
                </div>
                <div className="sectionMain">
                    <table className="table">
                        <tr className="tableHeader">
                            <th>{headerList.no}</th>
                            <th>{headerList.title}</th>
                            <th>{headerList.attend}</th>
                            <th>{headerList.average}</th>
                            <th style={{ letterSpacing: "-1px" }}>
                                {headerList.examdt}
                            </th>
                        </tr>
                        {testList.map((ele, idx) => (
                            <tr key={idx} className="tableMain">
                                <td>
                                    <span>{ele.examNo}</span>
                                </td>
                                <td
                                    onClick={() => {
                                        goClassTest(ele.examNo);
                                    }}
                                >
                                    <span className="linkname">
                                        {ele.examName}
                                    </span>
                                </td>
                                <td>
                                    <span>{ele.attendCount}</span>
                                </td>
                                <td>
                                    <span>{ele.avgScore}</span>
                                </td>
                                <td>
                                    <span>{ele.examDt}</span>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div className="select">
                        <select
                            value={examType}
                            onChange={handleExamTypeChange}
                        >
                            <option value="all">전체</option>
                            <option value="weekly">주간 시험</option>
                            <option value="monthly">월간 시험</option>
                        </select>
                        <select
                            value={orderType}
                            onChange={handleOrderTypeChange}
                        >
                            <option value="examName">시험과목</option>
                            <option value="examDt">날짜</option>
                        </select>
                        <select value={order} onChange={handleOrderChange}>
                            <option value="asc">오름차순</option>
                            <option value="desc">내림차순</option>
                        </select>
                    </div>
                    <Pagination
                        renderItem={item => (
                            <PaginationItem
                                component={Link}
                                to={`/teacher/class/detail/test?classno=${classQuNo}?page=${item.page}`}
                                {...item}
                            />
                        )}
                        count={testPages}
                        color="secondary"
                        className="pagination"
                    />
                </div>
            </TStudentTestListCss>
        </>
    );
};

export default TStudentTestList;
