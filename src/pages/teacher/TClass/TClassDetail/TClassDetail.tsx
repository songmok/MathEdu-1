import React from "react";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import TClassStudentDetail from "./TClassStudentDetail/TClassStudentDetail";

type Props = {};

const TClassDetail = (props: Props) => {
    return (
        <>
            <TSidebar />
            <TClassStudentDetail />
        </>
    );
};

export default TClassDetail;
