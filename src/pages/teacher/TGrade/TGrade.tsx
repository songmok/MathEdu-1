import LogoutBt from "../../../components/logoutBt/LogoutBt";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TGradeCss from "./TGradeCss";

const TGrade = () => {
    return (
        <>
            <TSidebar />
            <TGradeCss>
                <div className="tests">
                    <div className="weekT">
                        <p className="subTitle">주간 테스트</p>
                    </div>
                    <div className="monthT">
                        <p className="subTitle">월간 테스트</p>
                    </div>
                </div>
                <div>
                    <p className="subTitle">성적 분석</p>
                </div>
            </TGradeCss>
        </>
    );
};

export default TGrade;
