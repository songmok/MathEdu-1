import { useNavigate } from "react-router";

const Select = () => {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => navigate("/student/login")}>학생</div>
            <div onClick={() => navigate("/teacher/login")}>선생님</div>
        </>
    );
};
    
export default Select;
