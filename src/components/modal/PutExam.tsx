import { useState } from "react";
import ModalCss from "./ModalCss";
import axios from "axios";
import { useNavigate } from "react-router";

interface IProps {
    handler: boolean;
    handleClose: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const PutExam = (props: IProps) => {
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    function formatDate(e: string) {
        return e.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    }

    const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDate(e.target.value);
        setDate(formattedDate);
    };

    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const typeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    };

    const putExam = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!date) return alert("시험 날짜를 입력해주세요.");
        if (!title) return alert("시험 제목을 입력해주세요.");
        if (!type) return alert("시험 유형을 선택해주세요.");
        try {
            const response = await axios.put(
                `http://192.168.0.62:9988/api/exam`,
                {
                    classNo: 1,
                    date: date,
                    name: title,
                    type: type,
                },
            );
            console.log(response.data);
            props.setOpen(false);
            props.setHandler(!props.handler);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ModalCss>
            <div className="modalBox">
                <p className="boxTitle">시험 등록</p>
                <button onClick={props.handleClose} className="closeT">
                    x
                </button>
                <form className="putExam" onSubmit={putExam}>
                    <label>시험 날짜</label>
                    <input
                        type="text"
                        value={date}
                        onChange={dateChange}
                        maxLength={8}
                        placeholder="`YYYYDDMM`형식"
                    />
                    <label>시험 제목</label>
                    <input type="text" value={title} onChange={titleChange} />
                    <label>시험 유형</label>
                    <select defaultValue="test" onChange={typeChange}>
                        <option value="test" disabled>
                            유형
                        </option>
                        <option value="weekly">주간 시험</option>
                        <option value="monthly">월간 시험</option>
                    </select>
                    <button type="submit" className="submitBt">
                        등록
                    </button>
                </form>
            </div>
        </ModalCss>
    );
};

export default PutExam;
