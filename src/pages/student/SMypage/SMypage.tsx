import SSidebar from "../../../components/sSidebar/SSidebar";
import Info from "../../../components/layOut/Info/Info";
import studentpage from "./data/smypage.json";
export interface SImypage {
    name: string;
    profileImgURL: string;
    birth: string;
    phone: string;
    class: string;
    school: string;
    id: number;
    alternatePhone: string;
    classDays: string;
    startTime: string;
    endTime: string;
    address: string;
    grade: number;
    regDt: string;
    teacher: string;
    weeklyTest?: {
        score: number;
        rank: number;
        tieCnt: number;
        totalStudents: number;
        testDt: string;
    };
    monthlyTest?: {
        score: number;
        rank: number;
        tieCnt: number;
        totalStudents: number;
        testDt: string;
    };
}
const SMypage = () => {
    const student: SImypage = JSON.parse(JSON.stringify(studentpage.basicInfo));
    const weekly: SImypage = JSON.parse(JSON.stringify(studentpage.weeklyTest));
    const monthly: SImypage = JSON.parse(
        JSON.stringify(studentpage.weeklyTest),
    );
    return (
        <>
            <SSidebar />
            <Info
                headerName="마이 페이지"
                color="student"
                // basicInfo={student}
                // weeklyTest={weekly}
                // monthlyTest={monthly}
            />
        </>
    );
};

export default SMypage;
