import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../reducer/userSlice";
import { IUserData } from "../header/Header";
import LogoutBtCss from "./LogoutBtCss";
import { RootState } from "../../reducer/store";

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

    const user = useSelector((state: RootState) => state.user);

    return (
        <LogoutBtCss>
            {user.user === "student" ? (
                <img
                    className="profileImg"
                    src={`http://192.168.0.62:9988${props.userData.imgURL} `}
                />
            ) : (
                <img
                    className="profileImg"
                    src={`http://192.168.0.62:9988${props.userData.imageURL} `}
                />
            )}
            {/* <img
                className="profileImg"
                src={`http://192.168.0.62:9988${props.userData.imageURL} `}
            /> */}
            <span>{props.userData.name}</span>
            <img
                className="outImg"
                src={`${process.env.PUBLIC_URL}/images/logout.png`}
                onClick={logout}
            />
        </LogoutBtCss>
    );
};

export default LogoutBt;
