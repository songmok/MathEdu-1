import { TailSpin } from "react-loader-spinner";
import LoadingCss from "./LoadingCss";

const Loading = () => {
    return (
        <LoadingCss>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoadingCss>
    );
};

export default Loading;
