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
    const goClassStudent = (no: string) => {
        navigate(`/teacher/class/detail/studentinfo/${no}`);
    };

    const [classStudent, setClassStudent] = useState<ITlist[]>();

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
                                <th>{headerList.number}</th>
                                <th>{headerList.picture}</th>
                                <th>{headerList.student}</th>
                                <th>{headerList.phone}</th>
                                <th style={{ letterSpacing: "-1px" }}>
                                    {headerList.parentPhone}
                                </th>
                                <th>{headerList.address}</th>
                            </tr>

                            {classStudent?.map((ele, idx) => (
                                <tr key={ele.no} className="tableMain">
                                    {/* <Link></Link> */}
                                    <td>
                                        <span>{ele.no}</span>
                                    </td>
                                    <td>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                                        />
                                    </td>
                                    <td>
                                        <span
                                            className="linkname"
                                            onClick={() => {
                                                goClassStudent(ele.id);
                                            }}
                                        >
                                            {ele.name}
                                        </span>
                                    </td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.alternatephone}</td>
                                    <td>{ele.address}</td>
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
