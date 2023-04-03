import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Info from "../../../../../components/layOut/Info/Info";
import TSidebar from "../../../../../components/tSidebar/TSidebar";

export interface IStudentInfo {
    name: string;
    imgURL: string;
    birth: string;
    phone: string;
    className: string;
    school: string;
    id: number;
    alternatePhone: string;
    classDays: string;
    starttime: string;
    endtime: string;
    address: string;
    grade: number;
    regDt: string;
    teacher: string;
    weeklyTest: {
        score: number;
        rank: number;
        tieCnt: number;
        totalStudents: number;
        testDt: string;
    };
    monthlyTest: {
        score: number;
        rank: number;
        tieCnt: number;
        totalStudents: number;
        testDt: string;
    };
}

const TStudentInfo = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const stuId = pathname.split("/").pop();

    const [student, setStudent] = useState();
    const [weekly, setWeekly] = useState();
    const [monthly, setMonthly] = useState();
    const classStudentInfoApi = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/student/${stuId}`,
            );
            setStudent(response.data.info.basicInfo);
            setWeekly(response.data.info);
            console.log("시험정보", response.data.info);
            console.log("상세정보", response.data.info.basicInfo);
        } catch (error) {
            console.error("학생정보를 찾을 수 없습니다.", error);
        }
    };
    useEffect(() => {
        classStudentInfoApi();
    }, []);
    return (
        <>
            <TSidebar />
            <Info
                headerName="학생 정보"
                color="teacher"
                basicInfo={student}
                weeklyTest={weekly}
                monthlyTest={monthly}
            />
        </>
    );
};

export default TStudentInfo;
