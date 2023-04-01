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
    name: string;
    regdt: string;
    status: number;
    stuList: IStudentData[];
    totalStuCount: number;
    totalStuPage: number;
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
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/teacher/${user.id}`,
            );
            setUserData(response.data);
        } catch (error) {
            // console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <HeaderCss>
            {userData ? (
                <header className="header">
                    <p className="Stitle">반 이름이 들어갈 자리입니다</p>
                    <LogoutBt userData={userData} />
                </header>
            ) : (
                <Loading />
            )}
        </HeaderCss>
    );
};

export default Header;
