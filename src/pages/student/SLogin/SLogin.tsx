import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../../../reducer/userSlice";
import { useDispatch } from "react-redux";
import SLoginCss from "./SLoginCss";

const SLogin = () => {
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");

    const idHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const pwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://192.168.0.62:9988/api/student/login",
                {
                    id: id,
                    pwd: pwd,
                },
            );

            if (response.data.status) {
                navigate("/student/grade");
                const user = response.data.login;
                dispatch(
                    loginUser({
                        id: user.id,
                        name: user.name,
                        no: user.no,
                        user: "student",
                        classNo: user.classNo,
                        teacherNo: user.teacherNo,
                    }),
                );
            } else {
                alert(response.data.message);
            }
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };

    return (
        <SLoginCss>
            <img src={`${process.env.PUBLIC_URL}/images/logo_p.png`} />
            <p>- 학생용 -</p>
            <form onSubmit={login}>
                <input
                    placeholder="아이디"
                    type="text"
                    className="id-form"
                    onChange={idHandler}
                />
                <input
                    placeholder="비밀번호"
                    type="password"
                    className="pass-form"
                    onChange={pwdHandler}
                />
                <button type="submit" className="loginBt">
                    로그인
                </button>
            </form>
        </SLoginCss>
    );
};

export default SLogin;
