import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../reducer/userSlice";
import { IUserData } from "../header/Header";
import LogoutBtCss from "./LogoutBtCss";

interface IProps {
    userData: IUserData;
}

const LogoutBt = (props: IProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return (
        <LogoutBtCss>
            <img
                className="profileImg"
                src={`http://192.168.0.62:9988${props.userData.imageURL} `}
            />
            <span>{props.userData.name}</span>
            <img className="outImg" onClick={logout} />
        </LogoutBtCss>
    );
};

export default LogoutBt;
