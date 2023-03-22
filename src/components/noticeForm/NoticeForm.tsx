import NoticeFormCss from "./NoticeFormCss";

import { INotice } from "../../pages/teacher/TNotice/TNotice";
import { useNavigate } from "react-router";

interface IProps {
    sectionTitle: string;
    notice: INotice;
}

const NoticeForm = (props: IProps) => {
    const navigate = useNavigate();
    const goNoticePost = (no: number) => {
        navigate("/teacher/notice/post");
    };

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
                                <tr
                                    key={ele.no}
                                    className="tableMain"
                                    onClick={() => {
                                        goNoticePost(ele.no);
                                    }}
                                >
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
            </div>
        </NoticeFormCss>
    );
};

export default NoticeForm;
