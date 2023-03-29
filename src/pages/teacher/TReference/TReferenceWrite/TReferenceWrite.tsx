import TReferenceWriteCss from "./TReferenceWriteCss";

// React-Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef, useState } from "react";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import { useNavigate } from "react-router";

const TReferenceWrite = () => {
    const navigate = useNavigate();
    const QuillRef = useRef<ReactQuill>();
    const [contents, setContents] = useState("");

    const goBack = () => {
        navigate(-1);
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike"],
                    [{ size: ["small", false, "large", "huge"] }],
                    [
                        {
                            color: [
                                "black",
                                "red",
                                "orange",
                                "yellow",
                                "green",
                                "blue",
                                "purple",
                            ],
                        },
                    ],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    ["link", "image"],
                ],
            },
        }),
        [],
    );
    return (
        <>
            <TSidebar />
            <TReferenceWriteCss>
                <div className="section">
                    <div className="sectionTop">
                        <p>자료실 작성</p>
                    </div>
                    <div className="sectionMain">
                        <form className="title-area">
                            <textarea placeholder="제목을 입력해주세요." />
                        </form>
                        <div className="content-area">
                            <ReactQuill
                                ref={element => {
                                    if (element !== null) {
                                        QuillRef.current = element;
                                    }
                                }}
                                value={contents}
                                onChange={setContents}
                                modules={modules}
                                theme="snow"
                                placeholder="내용을 입력해주세요."
                            />
                        </div>
                        <form className="file-area">
                            <input type="file" accept=".pdf" />
                        </form>
                    </div>
                    <div className="sectionBt">
                        <button className="cancleBt" onClick={goBack}>
                            취소
                        </button>
                        <button className="completeBt">완료</button>
                    </div>
                </div>
            </TReferenceWriteCss>
        </>
    );
};

export default TReferenceWrite;
