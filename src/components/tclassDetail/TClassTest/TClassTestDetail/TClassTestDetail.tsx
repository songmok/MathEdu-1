import axios from "axios";
import { useEffect, useState } from "react";
import { TClassTestDetailCss } from "./TClassTestDetailCss";

export interface ITexstudentlist {
    list: ITexstudentListItem[];
}

export interface ITexstudentListItem {
    className: string;
    classNo: string;
    examDt: string;
    examName: string;
    examNo: string;
    imgURL: string;
    score: string;
    studentId: string;
    studentName: string;
    studentNo: string;
}
interface IPath {
    classPaNo: string;
    examPaNo: string;
}
const TClassTestDetail = (props: IPath) => {
    const { classPaNo, examPaNo } = props;
    const [exStudentList, setExStudentList] = useState<ITexstudentListItem[]>();

    // 학생 점수 리스트 api
    const classStudentTestApi = async () => {
        try {
            const res = await axios.get(
                `http://192.168.0.62:9988/api/exam/detail/${classPaNo}/${examPaNo}`,
            );
            console.log("학생 점수 리스트", res.data.list);
            setExStudentList(res.data.list);
        } catch (error) {
            console.error("학생리스트를 찾아올 수 없습니다.", error);
        }
    };
    // 점수등록 api
    const handleScoreInput = async (studentId: string) => {
        const score = prompt("점수를 입력해주세요.");
        const stuId = studentId;
        const scoreNum = score;
        try {
            const res = await axios.put(
                `http://192.168.0.62:9988/api/class/exam/${examPaNo}/${stuId}/${scoreNum}`,
            );
        } catch (error) {
            console.error("점수 등록에 실패했습니다.", error);
        }
    };
    useEffect(() => {
        classStudentTestApi();
    }, []);
    return (
        <>
            <TClassTestDetailCss>
                <div className="wrap">
                    <div className="sectionTop">
                        <p>학생 리스트</p>
                    </div>
                    <div className="sectionMain">
                        <table className="table">
                            <thead className="tableHeader">
                                <tr>
                                    <th>번호</th>
                                    <th>사진</th>
                                    <th>이름</th>
                                    <th>반 이름</th>
                                    <th>시험 이름</th>
                                    <th>점수</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {exStudentList?.map((ele, idx) => (
                                    <tr key={idx} className="tableMain">
                                        <td>
                                            <span>{ele.studentNo}</span>
                                        </td>
                                        <td>
                                            <img
                                                src={`http://192.168.0.62:9988/${ele.imgURL}`}
                                            />
                                        </td>
                                        <td>
                                            <span>{ele.studentName}</span>
                                        </td>
                                        <td>
                                            <span>{ele.className}</span>
                                        </td>
                                        <td>
                                            <span>{ele.examName}</span>
                                        </td>
                                        {ele.score !== null ? (
                                            <td>
                                                <span>{ele.score}</span>
                                            </td>
                                        ) : (
                                            <td>ㅡ</td>
                                        )}
                                        <td>
                                            {ele.score !== null ? (
                                                <button
                                                    className="re"
                                                    onClick={() =>
                                                        handleScoreInput(
                                                            ele.studentId,
                                                        )
                                                    }
                                                >
                                                    수정
                                                </button>
                                            ) : (
                                                <button
                                                    className="wr"
                                                    onClick={() =>
                                                        handleScoreInput(
                                                            ele.studentId,
                                                        )
                                                    }
                                                >
                                                    입력
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TClassTestDetailCss>
        </>
    );
};

export default TClassTestDetail;
