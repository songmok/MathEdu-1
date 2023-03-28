import ListCss from "./ListCss";
import {
    ITheader,
    ITlist,
} from "../../../pages/teacher/TClass/TClassDetail/TClassStudentDetail/TClassStudentDetail";

export interface ITlistLayout {
    tclassstudentList: ITlist[];
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

const StudentList = (
    props: ITlistLayout & IPagination & IStateLayout & ITheaderLayout,
) => {
    const { tclassstudentList, headerList } = props;
    const { state } = props; // state
    const { pagiclassname, pagination, pagicount } = props; // 페이지네이션

    return (
        <>
            <ListCss>
                <section className="section">
                    {/* 선생님페이지 - 반 학생 리스트 */}

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
                    </div>
                </section>
            </ListCss>
        </>
    );
};

export default StudentList;
