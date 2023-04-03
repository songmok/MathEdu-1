import NoticeFormCss from "./NoticeFormCss";

import { INotice } from "../../pages/teacher/TNotice/TNotice";
import { useNavigate } from "react-router";
import { useState } from "react";

interface IProps {
    sectionTitle: string;
    notice: INotice;
    checkedList: number[];
    setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NoticeForm = (props: IProps) => {
    const navigate = useNavigate();
    const goNoticePost = (no: number) => {
        navigate(`/teacher/notice/post?no=${no}`);
    };

    const checkedItem = (value: number, isChecked: boolean) => {
        if (isChecked) {
            props.setCheckedList([...props.checkedList, value]);
        } else if (!isChecked && props.checkedList.includes(value)) {
            const updatedList = props.checkedList.filter(
                item => item !== value,
            );
            props.setCheckedList(updatedList);
        }
    };

    const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        checkedItem(parseInt(value), isChecked);
    };

    const [allChecked, setAllChecked] = useState(false);

    const allCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            props.setCheckedList(props.notice.list.map(ele => ele.no));
        } else {
            props.setCheckedList([]);
        }
        setAllChecked(isChecked);
    };

    return (
        <NoticeFormCss>
            <div className="sectionTop">
                <p>{props.sectionTitle}</p>
                <div className="search">
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            className="searchBox"
                            onChange={e =>
                                props.setSearchKeyword(e.target.value)
                            }
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
                            <th style={{ width: "5%" }}>
                                <input
                                    type="checkbox"
                                    checked={
                                        props.notice.list.length ===
                                            props.checkedList.length &&
                                        props.notice.list.length !== 0
                                    }
                                    onChange={allCheckHandler}
                                />
                            </th>
                            <th style={{ width: "5%" }}>번호</th>
                            <th style={{ width: "10%" }}>카테고리</th>
                            <th style={{ width: "50%" }}>제목</th>
                            <th style={{ width: "15%" }}>작성일</th>
                            <th style={{ width: "15%" }}>작성자</th>
                        </tr>
                    </thead>
                    {props.notice.list && props.notice.list.length > 0 ? (
                        props.notice.list.map(ele => {
                            return (
                                <tbody key={ele.no}>
                                    <tr className="tableMain">
                                        <td>
                                            <input
                                                type="checkbox"
                                                value={ele.no}
                                                onChange={checkHandler}
                                                checked={props.checkedList.includes(
                                                    ele.no,
                                                )}
                                            />
                                        </td>
                                        <td>
                                            <span>{ele.no}</span>
                                        </td>
                                        <td>
                                            <span>{ele.category}</span>
                                        </td>
                                        <td
                                            className="noticeName"
                                            onClick={() => {
                                                goNoticePost(ele.no);
                                            }}
                                        >
                                            <span>{ele.title}</span>
                                        </td>
                                        <td>
                                            <span>
                                                {ele.regDt
                                                    .toString()
                                                    .slice(0, 10)}
                                            </span>
                                        </td>
                                        <td>
                                            <span>{ele.authorName}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={6} className="noRef">
                                    <span>등록된 게시글이 없습니다.</span>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </NoticeFormCss>
    );
};

export default NoticeForm;
