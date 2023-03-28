import React from "react";
import { useSearchParams } from "react-router-dom";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import TClassStudentDetail from "./TClassStudentDetail/TClassStudentDetail";

type Props = {};

const TClassDetail = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const no = searchParams.get("no");

    return (
        <>
            <TSidebar />
            <TClassStudentDetail />
        </>
    );
};

export default TClassDetail;
