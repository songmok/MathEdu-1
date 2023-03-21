import NoticeFormCss from "./NoticeFormCss";

import Pagination from "@mui/material/Pagination";
import { INotice } from "../../pages/teacher/TNotice/TNotice";

interface IProps {
    sectionTitle: string;
    notice: INotice;
}

const NoticeForm = (props: IProps) => {
    return (
        <NoticeFormCss>
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
                        {props.notice.list.map(ele => {
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
        </NoticeFormCss>
    );
};

export default NoticeForm;
