import React from "react";
import List from "../../../../components/layOut/List/List";
import tclassdetail from "./tclassdetail.json";
export interface TStudent {
    no: string;
    img: string;
    name: string;
    phone: string;
    alternatephone: string;
    address: string;
}

const TClassStudentList = () => {
    const classList: TStudent[] = JSON.parse(JSON.stringify(tclassdetail));

    return (
        <>
            <div>TClassDetail</div>
            <List
                tclassstudentList={classList}
                teachertable="teacherTableHeader"
            />
        </>
    );
};

export default TClassStudentList;
