import { IStudentInfo } from "../../../pages/teacher/TClass/TClassDetail/TStudentInfo/TStudentInfo";
import TClassGradeGraph from "../../../pages/teacher/TClass/TClassDetail/TStudentInfo/TClassGradeGraph/TClassGradeGraph";
import { InfoCss } from "./InfoCss";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";
import SMypageCss from "../../../pages/student/SMypage/SMypageCss";

interface InfoProps {
    title?: string;
    headerName?: string;
    basicInfo?: IStudentInfo;
    weeklyTest?: IStudentInfo;
    monthlyTest?: IStudentInfo;
    color: string;
}
interface IHbutton {
    handleOpen?: () => void;
}
const Info = (props: InfoProps & IHbutton) => {
    const { basicInfo, headerName, color, handleOpen } = props;
    const user = useSelector((state: RootState) => state.user.user);
    console.log("user", user);
    return (
        <>
            <InfoCss>
                <div className="infoPage">
                    <div>
                        <h5 className={color}>{headerName}</h5>
                        <SMypageCss>
                            {user === "student" ? (
                                <button onClick={handleOpen}>
                                    비밀번호 변경
                                </button>
                            ) : (
                                ""
                            )}
                        </SMypageCss>
                    </div>
                    <div className="info">
                        <div className="profileImg">
                            <img
                                src={`http://192.168.0.62:9988/${basicInfo?.imgURL}`}
                                alt=""
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
                                <span className={`key ${color}`}>생년월일</span>
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
                                <span className={`key ${color}`}>선생님 </span>
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
                {headerName === "마이 페이지" ? <></> : <TClassGradeGraph />}
            </InfoCss>
        </>
    );
};

export default Info;
