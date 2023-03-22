import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import ListCss from "./ListCss";

import Pagination from "@mui/material/Pagination";
import { TStudent } from "../../../pages/teacher/TClass/TClassDetail/TClassStudentList";
import { letterSpacing } from "@mui/system";

interface IList {
    tclassstudentList?: TStudent[];
    teachertable: string;
}

const List = (props: IList) => {
    const { tclassstudentList, teachertable } = props;
    return (
        <>
            <TSidebar />
            <ListCss>
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
                            {tclassstudentList && (
                                <tr className={teachertable}>
                                    <th>번호</th>
                                    <th>사진</th>
                                    <th>학생</th>
                                    <th>전화번호</th>
                                    <th style={{ letterSpacing: "-1px" }}>
                                        학부모전화번호
                                    </th>
                                    <th>주소</th>
                                </tr>
                            )}
                            {/* 선생님페이지 - 반 학생 리스트 */}
                            {tclassstudentList &&
                                tclassstudentList.map((ele, idx) => {
                                    return (
                                        <tr key={ele.no} className="tableMain">
                                            <td>{ele.no}</td>
                                            <td>{ele.img}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.phone}</td>
                                            <td>{ele.alternatephone}</td>
                                            <td>{ele.address}</td>
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
            </ListCss>
        </>
    );
};

export default List;
