import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { RootState } from "../../reducer/store";
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
    const user = useSelector((state: RootState) => state.user);

    const [userData, setUserData] = useState<IUserData>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/teacher/${user.id}`,
            );
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [userData]);

    const location = useLocation();
    if (
        location.pathname === "/" ||
        location.pathname === "/student/login" ||
        location.pathname === "/teacher/login"
    )
        return null;

    if (!userData) {
        return <div>Loading...</div>; // 데이터가 로드되기 전에 로딩 화면을 표시할 수 있습니다.
    }

    return (
        <HeaderCss>
            <header className="header">
                <p className="Stitle">반 이름이 들어갈 자리입니다</p>
                <LogoutBt userData={userData} />
            </header>
        </HeaderCss>
    );
};

export default Header;
