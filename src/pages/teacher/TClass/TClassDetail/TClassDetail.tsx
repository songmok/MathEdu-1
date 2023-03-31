// import { useSearchParams } from "react-router-dom";
import TClassInfo from "../../../../components/tclassDetail/TClassInfo/TClassInfo";
import TClassStudentDetail from "../../../../components/tclassDetail/TClassStudentDetail/TClassStudentDetail";
import TClassTest from "../../../../components/tclassDetail/TClassTest/TClassTest";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import { TClassDetailCss } from "./TClassDetailCss";

type Props = {};

const TClassDetail = (props: Props) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const no = searchParams.get("no");

    return (
        <>
            <TSidebar />
            <TClassDetailCss>
                <div className="top">
                    <TClassInfo />
                    <TClassTest />
                </div>
                <TClassStudentDetail />
            </TClassDetailCss>
        </>
    );
};

export default TClassDetail;
