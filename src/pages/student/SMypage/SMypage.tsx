import SSidebar from "../../../components/sSidebar/SSidebar";
import Info from "../../../components/layOut/Info/Info";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";
import { useEffect, useState } from "react";
import Loading from "../../../components/loading/Loading";
import { IStudentInfo } from "../../teacher/TClass/TClassDetail/TStudentInfo/TStudentInfo";
import Modal from "../../../components/modal/Modal";
import SMypageCss from "./SMypageCss";

const SMypage = () => {
    const user = useSelector((state: RootState) => state.user);

    const [userData, setUserData] = useState<IStudentInfo>();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/student/${user.id}`,
            );
            setUserData(response.data.info.basicInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(open);

    return (
        <>
            <SSidebar />
            {open && <Modal handleClose={handleClose} setOpen={setOpen} />}
            {userData ? (
                <>
                    <Info
                        headerName="마이 페이지"
                        color="student"
                        basicInfo={userData}
                        handleOpen={handleOpen}
                    />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default SMypage;
