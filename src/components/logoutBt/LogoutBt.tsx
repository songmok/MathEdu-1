import { IUserData } from "../header/Header";
import LogoutBtCss from "./LogoutBtCss";

interface IProps {
    userData: IUserData;
}

const LogoutBt = (props: IProps) => {
    return (
        <LogoutBtCss>
            <img
                className="profileImg"
                src={`http://192.168.0.62:9988${props.userData.imageURL} `}
            />
            <span>{props.userData.name}</span>
            <img className="outImg" />
        </LogoutBtCss>
    );
};

export default LogoutBt;
