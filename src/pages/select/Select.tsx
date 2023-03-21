import { useNavigate } from "react-router";
import SelectCss from "./SelectCss";

const Select = () => {
    const navigate = useNavigate();
    return (
        <SelectCss>
            <img src={`${process.env.PUBLIC_URL}/images/logo_p.png`} />
            <div onClick={() => navigate("/student/login")} className="student">
                학생 로그인
            </div>
            <div onClick={() => navigate("/teacher/login")} className="teacher">
                선생님 로그인
            </div>
        </SelectCss>
    );
};

export default Select;
