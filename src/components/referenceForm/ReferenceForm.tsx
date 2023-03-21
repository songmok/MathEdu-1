import ReferenceFormCss from "./ReferenceFormCss";

import Pagination from "@mui/material/Pagination";
import { IReference } from "../../pages/teacher/TReference/TReference";

interface IProps {
    sectionTitle: string;
    reference: IReference;
}

const ReferenceForm = (props: IProps) => {
    return (
        <ReferenceFormCss>
            <div className="sectionTop">
                <p>{props.sectionTitle}</p>
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
                            <th>카테고리</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.reference.list.map(ele => {
                            return (
                                <tr key={ele.no} className="tableMain">
                                    <td>{ele.no}</td>
                                    <td>{ele.category}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.regDt}</td>
                                    <td>{ele.author.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination
                    count={10}
                    color="secondary"
                    className="pagination"
                />
            </div>
        </ReferenceFormCss>
    );
};

export default ReferenceForm;
