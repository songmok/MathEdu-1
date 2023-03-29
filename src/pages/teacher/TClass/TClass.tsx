import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TClassCss from "./TClassCss";

import classList from "./ClassList.json";

import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router";

interface IList {
    name: string;
    grade: number;
    days: string;
    opendt: string;
    closedt: string;
}

const TClass = () => {
    const navigate = useNavigate();
    const goClassDetail = (no: number) => {
        console.log(no);
        navigate(`/teacher/class/detail?no=${no}`);
    };

    return (
        <>
            <TSidebar />
            <TClassCss>
                <section className="section">
                    <div className="sectionTop">
                        <p>클래스 리스트</p>
                        <div className="search">
                            <form>
                                <input className="searchBox" />
                                <button className="searchBt">검색</button>
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
                            {classList.list.map(ele => {
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
                                                <span>{ele.opendt}</span>
                                            </td>
                                            <td>
                                                <span>{ele.closedt}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
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
