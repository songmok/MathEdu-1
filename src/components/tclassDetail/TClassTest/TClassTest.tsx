import { TClassTestCss } from "./TClassTestCss";
import tclassdata from "./tclassdata.json";
import axios from "axios";
import { useEffect, useState } from "react";
export interface TExamInfo {
    examNo: number;
    examName: string;
    examDt: string;
    examType: "monthly" | "weekly";
    totalStuCount: number;
    missedCount: number;
    attendCount: number;
    avgScore: number;
}
export interface ITheader {
    no: string;
    title: string;
    attend: string;
    average: string;
    examdt: string;
}
interface IClassNumber {
    classQuNo: string | null;
}
const TClassTest = (props: IClassNumber) => {
    const { classQuNo } = props;
    const [testList, setTestList] = useState<TExamInfo[]>([]);
    const headerList: ITheader = {
        no: "번호",
        title: "시험과목",
        attend: "참석인원",
        average: "평균점수",
        examdt: "날짜",
    }; //반 학생 헤더
    const classStudentInfoApi = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/exam/list/all/${classQuNo}/examDt/desc`,
            );
            console.log("test", response.data.list);
            setTestList(response.data.list);
        } catch (error) {
            console.error("학생정보를 찾을 수 없습니다.", error);
        }
    };
    useEffect(() => {
        classStudentInfoApi();
    }, []);
    return (
        <>
            <TClassTestCss>
                <div className="header">
                    <span>시험 리스트</span>
                </div>
                <div className="sectionMain">
                    <table className="table">
                        <tr className="tableHeader">
                            <th>{headerList.no}</th>
                            <th>{headerList.title}</th>
                            <th>{headerList.attend}</th>
                            <th>{headerList.average}</th>
                            <th style={{ letterSpacing: "-1px" }}>
                                {headerList.examdt}
                            </th>
                        </tr>
                        {testList.slice(0, 5).map((ele, idx) => (
                            <tr key={idx} className="tableMain">
                                <td>{ele.examNo}</td>
                                <td>{ele.examName}</td>
                                <td>{ele.attendCount}</td>
                                <td>{ele.avgScore}</td>
                                <td>{ele.examDt}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </TClassTestCss>
        </>
    );
};

export default TClassTest;
