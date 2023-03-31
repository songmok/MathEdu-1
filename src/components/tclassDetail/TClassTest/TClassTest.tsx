import { TClassTestCss } from "./TClassTestCss";
import tclassdata from "./tclassdata.json";
export interface ITlist {
    no: string;
    title: string;
    name: string;
    attend: string;
    average: number;
    examdt: string;
}
export interface ITheader {
    no: string;
    title: string;
    attend: string;
    average: string;
    examdt: string;
}

const TClassTest = () => {
    const tclassdatamap: ITlist[] = JSON.parse(JSON.stringify(tclassdata)); //반 학생 리스트 data json
    const headerList: ITheader = {
        no: "번호",
        title: "시험과목",
        attend: "참석인원",
        average: "평균점수",
        examdt: "날짜",
    }; //반 학생 헤더
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
                        {tclassdatamap.map((ele, idx) => (
                            <tr key={ele.no} className="tableMain">
                                <td>{ele.no}</td>
                                <td>{ele.title}</td>
                                <td>{ele.attend}</td>
                                <td>{ele.average}</td>
                                <td>{ele.examdt}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </TClassTestCss>
        </>
    );
};

export default TClassTest;
