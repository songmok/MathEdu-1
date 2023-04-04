import ReferenceFormCss from "./ReferenceFormCss";

import { IReference } from "../../pages/teacher/TReference/TReference";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { RootState } from "../../reducer/store";
import { useSelector } from "react-redux";
import { IClassList } from "../../pages/teacher/TNotice/TNoticeWrite/TNoticeWrite";
import axios from "axios";

interface IProps {
    sectionTitle: string;
    reference: IReference;
    checkedList: number[];
    setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
    setClassNo?: React.Dispatch<React.SetStateAction<number>>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ReferenceForm = (props: IProps) => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);

    const goReferencePost = (no: number) => {
        if (user.user === "teacher") {
            navigate(`/teacher/reference/post?no=${no}`);
        } else if (user.user === "student") {
            navigate(`/student/reference/post?no=${no}`);
        }
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
            props.setCheckedList(props.reference.list.map(ele => ele.no));
        } else {
            props.setCheckedList([]);
        }
        setAllChecked(isChecked);
    };

    const [classList, setClassList] = useState<IClassList[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/teacher/classList/${user.id}`,
            );
            console.log(response.data);
            setClassList(response.data.classList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const classChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.setClassNo) {
            props.setClassNo(parseInt(e.target.value));
        }
    };

    return (
        <ReferenceFormCss>
            <div className="sectionTop">
                <p className={user.user === "teacher" ? "pt" : "ps"}>
                    {props.sectionTitle}
                </p>
                <div className="search">
                    {classList && (
                        <select
                            placeholder="반 선택"
                            defaultValue="class-list"
                            className="selectLIst"
                            onChange={classChange}
                        >
                            <option value="class-list" disabled>
                                반 목록
                            </option>
                            <option value="0">전체</option>
                            {classList.map(ele => (
                                <option key={ele.no} value={ele.no}>
                                    {ele.name}
                                </option>
                            ))}
                        </select>
                    )}
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            className="searchBox"
                            placeholder="검색어를 입력하세요."
                            onChange={e =>
                                props.setSearchKeyword(e.target.value)
                            }
                        />
                        <button
                            className={
                                user.user === "teacher"
                                    ? "searchBt"
                                    : "searchBtS"
                            }
                        >
                            검색
                        </button>
                    </form>
                </div>
            </div>
            <div className="sectionMain">
                <table className="table">
                    <thead>
                        <tr
                            className={
                                user.user === "teacher"
                                    ? "tableHeader"
                                    : "tableHeaderS"
                            }
                        >
                            {user.user === "teacher" ? (
                                <th style={{ width: "5%" }}>
                                    <input
                                        type="checkbox"
                                        checked={
                                            props.reference.list.length ===
                                                props.checkedList.length &&
                                            props.reference.list.length !== 0
                                        }
                                        onChange={allCheckHandler}
                                    />
                                </th>
                            ) : null}
                            <th style={{ width: "5%" }}>번호</th>
                            <th style={{ width: "10%" }}>카테고리</th>
                            <th style={{ width: "50%" }}>제목</th>
                            <th style={{ width: "15%" }}>작성일</th>
                            <th style={{ width: "15%" }}>작성자</th>
                        </tr>
                    </thead>

                    {props.reference.list && props.reference.list.length > 0 ? (
                        props.reference.list.map(ele => {
                            return (
                                <tbody key={ele.no}>
                                    <tr className="tableMain">
                                        {user.user === "teacher" ? (
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
                                        ) : null}
                                        <td>
                                            <span>{ele.no}</span>
                                        </td>
                                        <td>
                                            <span>{ele.category}</span>
                                        </td>
                                        <td
                                            className="referenceName"
                                            onClick={() => {
                                                goReferencePost(ele.no);
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
        </ReferenceFormCss>
    );
};

export default ReferenceForm;
