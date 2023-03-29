import SSidebar from "../../../components/sSidebar/SSidebar";
import SNoticeCss from "./SNotiecCss";
import notice from "../../../data/notice.json";

export interface SInotice {
    no: string;
    img: string;
    name: string;
    phone: string;
    alternatephone: string;
    address: string;
}
export interface SInoticeHeader {
    number: string;
    picture: string;
    student: string;
    phone: string;
    parentPhone: string;
    address: string;
}
const SNotice = () => {
    const tclassstudentList: SInotice[] = JSON.parse(JSON.stringify(notice)); //반 학생 리스트 data json
    const headerList: SInoticeHeader = {
        number: "번호",
        picture: "사진",
        student: "학생",
        phone: "전화번호",
        parentPhone: "학부모전화번호",
        address: "주소",
    }; //반 학생 헤더

    return (
        <>
            <SSidebar />
            <SNoticeCss></SNoticeCss>
        </>
    );
};

export default SNotice;
