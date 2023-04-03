// import { useSearchParams } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";
import TClassInfo from "../../../../components/tclassDetail/TClassInfo/TClassInfo";
import TClassStudentDetail from "../../../../components/tclassDetail/TClassStudentDetail/TClassStudentDetail";
import TClassTest from "../../../../components/tclassDetail/TClassTest/TClassTest";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import { TClassDetailCss } from "./TClassDetailCss";

const TClassDetail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const classQuNo = new URLSearchParams(location.search).get("classno");
    console.log("lo", classQuNo);
    return (
        <>
            <TSidebar />
            <TClassDetailCss>
                <div className="top">
                    <TClassInfo classQuNo={classQuNo} />
                    <TClassTest classQuNo={classQuNo} />
                </div>
                <TClassStudentDetail classQuNo={classQuNo} />
            </TClassDetailCss>
        </>
    );
};

export default TClassDetail;
