import LogoutBt from "../../../components/logoutBt/LogoutBt";
import SSidebar from "../../../components/sSidebar/SSidebar";

import SGradeCss from "./SGradeCss";

const SGrade = () => {
    return (
        <>
            <SSidebar />
            <SGradeCss>
                <header className="header">
                    <p className="title">성적관리</p>
                    <LogoutBt />
                </header>
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
            </SGradeCss>
        </>
    );
};

export default SGrade;
