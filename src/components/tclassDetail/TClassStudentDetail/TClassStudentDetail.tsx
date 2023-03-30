import { useNavigate } from "react-router-dom";
import tclassdetail from "./tclassdetail.json";
import { TClassStudentDetailCss } from "./TClassStudentDetailCss";

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
    const navigate = useNavigate();
    const goClassStudent = (no: number) => {
        navigate(`/teacher/class/detail/studentinfo`);
    };

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
                            {tclassstudentList.map((ele, idx) => (
                                <tr key={ele.no} className="tableMain">
                                    {/* <Link></Link> */}
                                    <td>{ele.no}</td>
                                    <td>
                                        <img
                                            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                                        />
                                    </td>
                                    <td>
                                        <span
                                            onClick={() => {
                                                goClassStudent(idx);
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
