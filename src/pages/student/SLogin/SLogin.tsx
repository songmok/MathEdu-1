import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import SLoginCss from "./SLoginCss";
import { loginUser } from "../../../reducer/userSlice";
import { useDispatch } from "react-redux";

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

    const login = async () => {
        try {
            const response = await axios.post(
                "http://192.168.0.62:9988/api/student/login",
                {
                    id: id,
                    pwd: pwd,
                },
            );
            console.log(response.data.message);
            if (response.data.status) {
                navigate("/student/grade");
                const user = response.data.login;
                dispatch(
                    loginUser({
                        id: user.id,
                        name: user.name,
                        no: user.no,
                    }),
                );
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SLoginCss>
            <img src={`${process.env.PUBLIC_URL}/images/logo_p.png`} />
            <p>- 학생용 -</p>
            <form>
                <input
                    placeholder="아이디"
                    className="id-form"
                    onChange={idHandler}
                />
                <input
                    placeholder="비밀번호"
                    className="pass-form"
                    onChange={pwdHandler}
                />
            </form>
            <div onClick={login} className="loginBt">
                로그인
            </div>
        </SLoginCss>
    );
};

export default SLogin;
