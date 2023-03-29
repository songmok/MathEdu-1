import { TClassInfoCss } from "./TClassInfoCss";

type Props = {};

const TClassInfo = (props: Props) => {
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
                                <span>2020-02-01</span>
                                <span className="wave">-</span>
                                <span>2023-02-02</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>담 임 선 생 님</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>김 채 원</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>학 년</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>중학교 3학년</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>반 이 름</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>기초 강화 학습 A반</span>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <span>
                                    <em>수 업 시 간</em>
                                </span>
                            </div>
                            <div className="right">
                                <span>월,수,금</span>
                                <span>/</span>
                                <span>
                                    <span>18:30</span>
                                    <span>~</span>
                                    <span>18:30</span>
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
