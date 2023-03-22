import TSidebar from "../../../components/tSidebar/TSidebar";
import ListCss from "./ListCss";
import Pagination from "@mui/material/Pagination";

import TClassStudentList from "./tclassStudentList/TClassStudentList";
import {
    ITheader,
    ITlist,
} from "../../../pages/teacher/TClass/TClassStudentDetail/TClassStudentDetail";

export interface ITlistLayout {
    tclassstudentList?: ITlist[];
}
interface ITheaderLayout {
    headerList: ITheader;
}
interface IStateLayout {
    state: number;
}
interface IPagination {
    pagination?: number;
    pagiclassname?: string;
    pagicount?: number;
}

const List = (
    props: ITlistLayout & IPagination & IStateLayout & ITheaderLayout,
) => {
    const { tclassstudentList, headerList } = props;
    const { state } = props; // state
    const { pagiclassname, pagination, pagicount } = props; // 페이지네이션

    return (
        <>
            <TSidebar />
            <ListCss>
                <section className="section">
                    {/* 선생님페이지 - 반 학생 리스트 */}
                    {tclassstudentList && (
                        <>
                            <div className="sectionTop">
                                <p>클래스 리스트</p>
                                <div className="search">
                                    <form>
                                        <input className="searchBox" />
                                        <button className="searchBt">
                                            검색
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="sectionMain">
                                <table className="table">
                                    <tr className="tableHeader">
                                        <th>{headerList.number}</th>
                                        <th>{headerList.picture}</th>
                                        <th>{headerList.student}</th>
                                        <th>{headerList.phone}</th>
                                        <th style={{ letterSpacing: "-1px" }}>
                                            {headerList.parentPhone}
                                        </th>
                                        <th>{headerList.address}</th>
                                    </tr>
                                    {tclassstudentList.map((ele, idx) => (
                                        <tr key={ele.no} className="tableMain">
                                            <td>{ele.no}</td>
                                            <td>{ele.img}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.phone}</td>
                                            <td>{ele.alternatephone}</td>
                                            <td>{ele.address}</td>
                                        </tr>
                                    ))}
                                </table>
                                {/* 페이지 네이션*/}
                                {pagination && (
                                    <Pagination
                                        count={pagicount}
                                        color="secondary"
                                        className={pagiclassname}
                                    />
                                )}
                            </div>
                        </>
                    )}
                    {/* 페이지 네이션*/}
                    {state ? (
                        <Pagination
                            count={pagicount}
                            color="secondary"
                            className={pagiclassname}
                        />
                    ) : (
                        ""
                    )}
                </section>
            </ListCss>
        </>
    );
};

export default List;
// 리스트 원본
// {tclassstudentList && (
//     <>
//         <div className="sectionTop">
//             <p>클래스 리스트</p>
//             <div className="search">
//                 <form>
//                     <input className="searchBox" />
//                     <button className="searchBt">
//                         검색
//                     </button>
//                 </form>
//             </div>
//         </div>
//         <div className="sectionMain">
//             <table className="table">
//                 <tr className="tableHeader">
//                     <th>{headerList.number}</th>
//                     <th>{headerList.picture}</th>
//                     <th>{headerList.student}</th>
//                     <th>{headerList.phone}</th>
//                     <th style={{ letterSpacing: "-1px" }}>
//                         {headerList.parentPhone}
//                     </th>
//                     <th>{headerList.address}</th>
//                 </tr>
//                 {tclassstudentList.map((ele, idx) => (
//                     <tr key={ele.no} className="tableMain">
//                         <td>{ele.no}</td>
//                         <td>{ele.img}</td>
//                         <td>{ele.name}</td>
//                         <td>{ele.phone}</td>
//                         <td>{ele.alternatephone}</td>
//                         <td>{ele.address}</td>
//                     </tr>
//                 ))}
//             </table>
//             {/* 페이지 네이션*/}
//             {pagination && (
//                 <Pagination
//                     count={pagicount}
//                     color="secondary"
//                     className={pagiclassname}
//                 />
//             )}
//         </div>
//     </>
// )}
