import { SImypage } from "../../../pages/student/SMypage/SMypage";
import TClassGradeGraph from "../../../pages/teacher/TClass/TClassDetail/TStudentInfo/TClassGradeGraph/TClassGradeGraph";
import { TStudentInfo } from "../../../pages/teacher/TClass/TClassDetail/TStudentInfo/TStudentInfo";
import TGrade from "../../../pages/teacher/TGrade/TGrade";

import { InfoCss } from "./InfoCss";

interface StudentInfoProps {
    title?: string;
    headerName?: string;
    basicInfo?: TStudentInfo & SImypage; // basicInfo 속성의 타입을 TStudentInfo로 변경
    weeklyTest?: TStudentInfo & SImypage;
    monthlyTest?: TStudentInfo & SImypage;
    color: string;
}
// interface MYstudentInfoProps {
//     title?: string;
//     headerName?: string;
//     basicInfo: SImypage; // basicInfo 속성의 타입을 TStudentInfo로 변경
//     weeklyTest?: SImypage;
//     monthlyTest?: SImypage;
//     color: string;
// }
const Info = (props: StudentInfoProps) => {
    const { basicInfo, headerName, color } = props;

    return (
        <>
            <InfoCss>
                <div className="infoPage">
                    <h5 className={color}>{headerName}</h5>
                    <div className="info">
                        <div className="profileImg">
                            {/* <img src={basicInfo?.profileImgURL} alt="" /> */}
                            <img
                                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                            />
                        </div>
                        <ul className="infoGrid">
                            <li className="infoText">
                                <span className={`key ${color}`}>이름 </span>
                                <span className="data">{basicInfo?.name}</span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>학교 </span>
                                <span className="data">
                                    {basicInfo?.school}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>학년 </span>
                                <span className="data">{basicInfo?.grade}</span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>
                                    생년월일{" "}
                                </span>
                                <span className="data">{basicInfo?.birth}</span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>아이디 </span>
                                <span className="data">{basicInfo?.id}</span>
                            </li>

                            <li className="infoText">
                                <span className={`key ${color}`}>폰 번호 </span>
                                <span className="data">{basicInfo?.phone}</span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>가입일 </span>
                                <span className="data">{basicInfo?.regDt}</span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>주소 </span>
                                <span className="data">
                                    {basicInfo?.address}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>반 </span>
                                <span className="data">
                                    {basicInfo?.className}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>수업일 </span>
                                <span className="data">
                                    {basicInfo?.classDays} |{" "}
                                    {basicInfo?.starttime
                                        .split(":")
                                        .slice(0, 2)
                                        .join(":")}
                                    -{" "}
                                    {basicInfo?.endtime
                                        .split(":")
                                        .slice(0, 2)
                                        .join(":")}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>담임 </span>
                                <span className="data">
                                    {basicInfo?.teacher}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className={`key ${color}`}>
                                    보호자 연락처{" "}
                                </span>
                                <span className="data">
                                    {basicInfo?.alternatePhone}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <TClassGradeGraph />
            </InfoCss>
        </>
    );
};

export default Info;
