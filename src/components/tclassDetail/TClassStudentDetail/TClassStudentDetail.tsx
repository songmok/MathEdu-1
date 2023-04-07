import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TClassStudentDetailCss } from "./TClassStudentDetailCss";

export interface ITlist {
    no: string;
    img: string;
    id: string;
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
interface IClassNumber {
    classQuNo: string | null;
}
const TClassStudentDetail = (props: IClassNumber) => {
    const { classQuNo } = props;
    const navigate = useNavigate();
    const goClassStudent = (id: string) => {
        navigate(`/teacher/class/detail/studentinfo/${id}`);
    };

    const [classStudent, setClassStudent] = useState<ITlist[]>();

    console.log(classStudent);

    const classStudentListApi = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/class/student/${classQuNo}`,
            );
            console.log("학생리스트", response.data.stuList);
            setClassStudent(response.data.stuList);
        } catch (error) {
            console.error("err", error);
        }
    };
    useEffect(() => {
        classStudentListApi();
    }, []);
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
            <TClassStudentDetailCss>
                <div className="wrap">
                    <div className="sectionTop">
                        <p>학생 리스트</p>
                    </div>
                    <div className="sectionMain">
                        <table className="table">
                            <tr className="tableHeader">
                                <th style={{ width: "5%" }}>
                                    {headerList.number}
                                </th>
                                <th style={{ width: "20%" }}>
                                    {headerList.picture}
                                </th>
                                <th style={{ width: "20%" }}>
                                    {headerList.student}
                                </th>
                                <th style={{ width: "10%" }}>
                                    {headerList.phone}
                                </th>
                                <th
                                    style={{
                                        letterSpacing: "-1px",
                                        width: "5%",
                                    }}
                                >
                                    {headerList.parentPhone}
                                </th>
                                <th style={{ width: "10%" }}>
                                    {headerList.address}
                                </th>
                            </tr>

                            {classStudent?.map((ele, idx) => (
                                <tr key={ele.no} className="tableMain">
                                    {/* <Link></Link> */}
                                    <td style={{ width: "5%" }}>
                                        <span>{ele.no}</span>
                                    </td>
                                    <td style={{ width: "20%" }}>
                                        <img
                                            src={`http://192.168.0.62:9988/${ele.img}`}
                                        />
                                    </td>
                                    <td
                                        style={{ width: "20%" }}
                                        className="linkname"
                                        onClick={() => {
                                            goClassStudent(ele.id);
                                        }}
                                    >
                                        <span>{ele.name}</span>
                                    </td>
                                    <td style={{ width: "10%" }}>
                                        {ele.phone}
                                    </td>
                                    <td style={{ width: "5%" }}>
                                        {ele.alternatephone}
                                    </td>
                                    <td style={{ width: "30%" }}>
                                        {ele.address}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </TClassStudentDetailCss>
        </>
    );
};

export default TClassStudentDetail;
