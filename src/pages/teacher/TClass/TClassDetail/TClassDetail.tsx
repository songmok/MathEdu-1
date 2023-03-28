import { useSearchParams } from "react-router-dom";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import { TClassDetailCss } from "./TClassDetailCss";
import TClassInfo from "./TClassInfo/TClassInfo";
import TClassStudentDetail from "./TClassStudentDetail/TClassStudentDetail";
import TClassTest from "./TClassTest/TClassTest";

type Props = {};

const TClassDetail = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const no = searchParams.get("no");

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
