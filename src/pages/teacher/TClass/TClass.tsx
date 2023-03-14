import TSidebar from "../../../components/TSidebar/TSidebar";
import TClassCss from "./TClaaCss";

const TClass = () => {
    return (
        <>
            <TSidebar />
            <TClassCss>
                <p className="title">클래스 관리</p>
            </TClassCss>
        </>
    );
};

export default TClass;
