import ReferenceFormCss from "./ReferenceFormCss";

import { IReference } from "../../pages/teacher/TReference/TReference";
import { useNavigate } from "react-router";
import { useState } from "react";

interface IProps {
    sectionTitle: string;
    reference: IReference;
    checkedList: number[];
    setCheckedList: React.Dispatch<React.SetStateAction<number[]>>;
}

const ReferenceForm = (props: IProps) => {
    const navigate = useNavigate();
    const goReferencePost = (no: number) => {
        navigate(`/teacher/reference/post?no=${no}`);
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
                            <th>
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
                                    <td>
                                        <span
                                            className="referenceName"
                                            onClick={() => {
                                                goReferencePost(ele.no);
                                            }}
                                        >
                                            {ele.title}
                                        </span>
                                    </td>
                                    <td>
                                        <span>{ele.regDt}</span>
                                    </td>
                                    <td>
                                        <span>{ele.author.name}</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </ReferenceFormCss>
    );
};

export default ReferenceForm;
