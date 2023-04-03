import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../../reducer/userSlice";
import TLoginCss from "./TLoginCss";

const TLogin = () => {
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
                "http://192.168.0.62:9988/api/teacher/login",
                {
                    id: id,
                    pwd: pwd,
                },
            );

            if (response.data.status) {
                navigate("/teacher/class");
                const user = response.data.teacher;
                dispatch(
                    loginUser({
                        id: user.id,
                        imageURL: user.imageURL,
                        name: user.name,
                        no: user.no,
                        user: "teacher",
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
        <>
            <TLoginCss>
                <img src={`${process.env.PUBLIC_URL}/images/logo_p.png`} />
                <p>- 선생님용 -</p>
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
            </TLoginCss>
        </>
    );
};

export default TLogin;
