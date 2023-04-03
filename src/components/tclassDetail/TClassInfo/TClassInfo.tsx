import axios from "axios";
import { useEffect, useState } from "react";
import { TClassInfoCss } from "./TClassInfoCss";

interface IClassNumber {
    classQuNo: string | null;
}
interface IClassInfo {
    no: number;
    name: string;
    grade: number;
    teacher: string;
    days: string;
    opendt: string;
    closedt: string;
    totaldate: number;
    starttime: string;
    endtime: string;
}

const TClassInfo = (props: IClassNumber) => {
    const { classQuNo } = props;
    const [classInfo, setClassInfo] = useState<IClassInfo>();

    const classDetailApi = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/class/detail/${classQuNo}`,
            );
            setClassInfo(response.data.info);
        } catch (error) {
            console.error("err", error);
        }
    };
    useEffect(() => {
        classDetailApi();
    }, []);

    return (
        <>
            <TClassInfoCss>
                <div className="header">
                    <span>반 정보</span>
                </div>
                <div className="wrap">
                    <ul>
                        <li>
                            <div className="left">
                                <span>
                                    <em>개 강 기 간</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>
                                    {classInfo?.opendt.toString().slice(0, 10)}
                                </span>
                                <span className="wave">-</span>
                                <span>
                                    {classInfo?.closedt.toString().slice(0, 10)}
                                </span>
                            </div>
                        </li>
                        {/* 아래와 같이 코드를 수정 */}
                        <li>
                            <div className="left">
                                <span>
                                    <em>담 임 선 생 님</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>{classInfo?.teacher}</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>학 년</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>{`${classInfo?.grade}학년`}</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>반 이 름</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>{classInfo?.name}</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>수 업 시 간</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>{classInfo?.days}</span>
                                <span>/</span>
                                <span>
                                    <span>{classInfo?.starttime}</span>
                                    <span>~</span>
                                    <span>{classInfo?.endtime}</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </TClassInfoCss>
        </>
    );
};

export default TClassInfo;
