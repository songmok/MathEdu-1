import TReferenceWriteCss from "./TReferenceWriteCss";

// React-Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMemo, useRef, useState } from "react";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducer/store";

const TReferenceWrite = () => {
    const navigate = useNavigate();
    const QuillRef = useRef<ReactQuill>();
    const user = useSelector((state: RootState) => state.user);

    const [title, setTtitle] = useState("");

    const contentTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTtitle(e.target.value);
    };

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

    const writeRef = async () => {
        try {
            const response = await axios.put(
                `http://192.168.0.62:9988/api/notice`,
                {
                    category: "",
                    classNo: 1,
                    content: contents,
                    files: [],
                    teacherNo: user.no,
                    title: "",
                },
            );
        } catch (error) {
            console.log(error);
        }
    };

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
                            <textarea
                                placeholder="제목을 입력해주세요."
                                onChange={contentTitle}
                            />
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
