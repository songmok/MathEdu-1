import TClassStudentList from "./TClassStudentList";

export interface TStudent {
    no: string;
    img: string;
    name: string;
    phone: string;
    alternatephone: string;
    address: string;
}

const tclassdetail = () => {
    const classList: TStudent[] = JSON.parse(JSON.stringify(tclassdetail));
    return (
        <>
            <div>TClassDetail</div>
            <TClassStudentList />
        </>
    );
};

export default tclassdetail;
