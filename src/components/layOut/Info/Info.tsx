import type { TStudentInfo } from "../../../pages/teacher/TClass/TStudentInfo/TStudentInfo";
import { InfoCss } from "./InfoCss";

interface StudentInfoProps {
    title?: string;
    headerName?: string;
    basicInfo: TStudentInfo; // basicInfo 속성의 타입을 TStudentInfo로 변경
    weeklyTest?: TStudentInfo;
    monthlyTest?: TStudentInfo;
}

const Info = (props: StudentInfoProps) => {
    const { basicInfo, weeklyTest, monthlyTest, title, headerName } = props;

    return (
        <>
            <InfoCss>
                <p className={title}>{headerName}</p>
                <div className="infoPage">
                    <h5>{headerName}</h5>
                    <div className="info">
                        <div className="profileImg">
                            <img src={basicInfo.profileImgURL} alt="" />
                        </div>
                        <ul className="infoGrid">
                            <li className="infoText">
                                <span className="key">이름 </span>
                                <span className="data">{basicInfo.name}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">학교 </span>
                                <span className="data">{basicInfo.school}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">학년 </span>
                                <span className="data">{basicInfo.grade}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">생년월일 </span>
                                <span className="data">{basicInfo.birth}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">아이디 </span>
                                <span className="data">{basicInfo.id}</span>
                            </li>

                            <li className="infoText">
                                <span className="key">폰 번호 </span>
                                <span className="data">{basicInfo.phone}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">가입일 </span>
                                <span className="data">{basicInfo.regDt}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">주소 </span>
                                <span className="data">
                                    {basicInfo.address}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className="key">반 </span>
                                <span className="data">{basicInfo.class}</span>
                            </li>
                            <li className="infoText">
                                <span className="key">수업일 </span>
                                <span className="data">
                                    {basicInfo.classDays}/ {basicInfo.startTime}{" "}
                                    - {basicInfo.endTime}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className="key">담임 </span>
                                <span className="data">
                                    {basicInfo.teacher}
                                </span>
                            </li>
                            <li className="infoText">
                                <span className="key">보호자 연락처 </span>
                                <span className="data">
                                    {basicInfo.alternatePhone}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </InfoCss>
        </>
    );
};

export default Info;

//Note: This code is a React component that receives some props with the student's information and renders it to the
