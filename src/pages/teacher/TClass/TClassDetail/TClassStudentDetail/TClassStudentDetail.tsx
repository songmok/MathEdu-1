import StudentList from "../../../../../components/layOut/studentList/StudentList";
import tclassdetail from "./tclassdetail.json";
export interface ITlist {
    no: string;
    img: string;
    name: string;
    phone: string;
    alternatephone: string;
    address: string;
}
export interface ITheader {
    number: string;
    picture: string;
    student: string;
    phone: string;
    parentPhone: string;
    address: string;
}
const TClassStudentDetail = () => {
    const tclassstudentList: ITlist[] = JSON.parse(
        JSON.stringify(tclassdetail),
    ); //반 학생 리스트 data json
    const headerList: ITheader = {
        number: "번호",
        picture: "사진",
        student: "학생",
        phone: "전화번호",
        parentPhone: "학부모전화번호",
        address: "주소",
    }; //반 학생 헤더
    return (
        <>
            <StudentList
                state={0}
                tclassstudentList={tclassstudentList}
                headerList={headerList}
            />
        </>
    );
};

export default TClassStudentDetail;
