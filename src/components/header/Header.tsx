import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { RootState } from "../../reducer/store";
import Loading from "../loading/Loading";
import LogoutBt from "../logoutBt/LogoutBt";
import HeaderCss from "./HeaderCss";

export interface IUserData {
    currentStuPage: number;
    id: string;
    imageURL: string;
    imgURL: string;
    name: string;
    regdt: string;
    status: number;
    stuList: IStudentData[];
    totalStuCount: number;
    totalStuPage: number;
    className: string;
}

interface IStudentData {
    address: string;
    alternatephone: string;
    img: string;
    name: string;
    no: number;
    phone: string;
}

const Header = () => {
    const location = useLocation();

    if (
        location.pathname === "/" ||
        location.pathname === "/student/login" ||
        location.pathname === "/teacher/login"
    )
        return null;

    const user = useSelector((state: RootState) => state.user);

    const [userData, setUserData] = useState<IUserData>();

    const fetchData = async () => {
        if (user.user === "teacher") {
            try {
                const response = await axios.get(
                    `http://192.168.0.62:9988/api/teacher/${user.id}`,
                );
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        } else if (user.user === "student") {
            try {
                const response = await axios.get(
                    `http://192.168.0.62:9988/api/student/${user.id}`,
                );
                setUserData(response.data.info.basicInfo);
            } catch (error) {
                console.log(error);
            }
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <HeaderCss>
            {userData ? (
                <header className="header">
                    <p
                        className={
                            user.user === "student" ? "Stitle" : "Ttitle"
                        }
                    >
                        {user.user === "student"
                            ? userData.className
                            : "성적 관리 시스템"}
                    </p>
                    <LogoutBt userData={userData} />
                </header>
            ) : (
                <Loading />
            )}
        </HeaderCss>
    );
};

export default Header;
