import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TClassCss from "./TClassCss";

import classList from "./ClassList.json";

import Pagination from "@mui/material/Pagination";

interface IList {
    name: string;
    grade: number;
    days: string;
    opendt: string;
    closedt: string;
}

const TClass = () => {
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
                            <tr className="tableHeader">
                                <th>번호</th>
                                <th>반</th>
                                <th>요일</th>
                                <th>학년</th>
                                <th>개강일</th>
                                <th>종강일</th>
                            </tr>
                            {classList.list.map((ele, idx) => {
                                return (
                                    <tr key={idx} className="tableMain">
                                        <td>{idx}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.grade}</td>
                                        <td>{ele.days}</td>
                                        <td>{ele.opendt}</td>
                                        <td>{ele.closedt}</td>
                                    </tr>
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
