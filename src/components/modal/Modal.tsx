import axios from "axios";
import ModalCss from "./ModalCss";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/store";
import { useState } from "react";

interface IProps {
    handleClose: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: IProps) => {
    const user = useSelector((state: RootState) => state.user);

    const [oldPwd, setOldPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [newPwdCheck, setNewPwdCheck] = useState("");

    const changePw = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!oldPwd) return alert("기존 비밀번호를 입력해주세요.");
        if (!newPwd) return alert("새 비밀번호를 입력해주세요.");
        if (!newPwdCheck) return alert("새 비밀번호를 확인해주세요.");
        if (newPwd !== newPwdCheck)
            return alert("새 비밀번호가 일치하지 않습니다.");

        try {
            const response = await axios.patch(
                `http://192.168.0.62:9988/api/student/password/${user.id}`,
                {
                    newPwd: newPwd,
                    oldPwd: oldPwd,
                },
            );
            alert(response.data.message);
            props.setOpen(false);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };

    return (
        <ModalCss>
            <div className="modalBox">
                <button onClick={props.handleClose} className="close">
                    x
                </button>
                <p>비밀번호 변경</p>
                <form className="changePw" onSubmit={changePw}>
                    <label htmlFor="oldPw">기존 비밀번호</label>
                    <input
                        type="password"
                        value={oldPwd}
                        onChange={e => setOldPwd(e.target.value)}
                    />
                    <label htmlFor="newPw">새 비밀번호</label>
                    <input
                        type="password"
                        value={newPwd}
                        onChange={e => setNewPwd(e.target.value)}
                    />
                    <label htmlFor="newPwCheck">새 비밀번호 확인</label>
                    <input
                        type="password"
                        value={newPwdCheck}
                        onChange={e => setNewPwdCheck(e.target.value)}
                    />
                    <button type="submit" className="submitBt">
                        변경
                    </button>
                </form>
            </div>
        </ModalCss>
    );
};

export default Modal;
