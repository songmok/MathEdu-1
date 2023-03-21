import tstudentinfo from "./data/tstudentinfo.json";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import Info from "../../../../components/layOut/Info/Info";
export interface TStudentInfo {
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
}

const TStudentInfo = () => {
    console.log("data", tstudentinfo);
    const student: TStudentInfo = JSON.parse(JSON.stringify(tstudentinfo));
    return (
        <>
            <TSidebar />
            <Info
                title="title teacher"
                headerName="학생 정보"
                basicInfo={student}
            />
        </>
    );
};

export default TStudentInfo;
