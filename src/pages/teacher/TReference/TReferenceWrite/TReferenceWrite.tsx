import TSidebar from "../../../../components/tSidebar/TSidebar";
import TReferenceWriteCss from "./TReferenceWriteCss";

import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducer/store";
import { IClassList } from "../../TNotice/TNoticeWrite/TNoticeWrite";

// React-Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TReferenceWrite = () => {
    const navigate = useNavigate();
    const QuillRef = useRef<ReactQuill>();
    const user = useSelector((state: RootState) => state.user);

    const [classList, setClassList] = useState<IClassList[]>([]);

    const [title, setTtitle] = useState("");
    const [contents, setContents] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [cate, setCate] = useState("");
    const [classNo, setClassNo] = useState("");

    const contentTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTtitle(e.target.value);
    };

    const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.target.files;
        setFiles(uploadedFiles ? Array.from(uploadedFiles) : []);
    };

    const cateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCate(e.target.value);
    };

    const classChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setClassNo(e.target.value);
        console.log(classNo);
    };

    const goBack = () => {
        navigate(-1);
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline", "strike"],
                    // [{ size: ["small", false, "large", "huge"] }],
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

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/teacher/classList/${user.id}`,
            );
            console.log(response.data);
            setClassList(response.data.classList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const writeRef = async () => {
        if (!title) return alert("제목을 입력해주세요.");
        if (!contents) return alert("내용을 입력해주세요.");
        if (!cate) return alert("카테고리를 선택해주세요.");
        if (!classNo) return alert("반을 선택해주세요.");
        try {
            const arr = new Array();

            for (let i = 0; i < files.length; i++) {
                arr.push(files[i]);
            }

            const response = await axios.put(
                `http://192.168.0.62:9988/api/bbs`,
                {
                    category: cate,
                    classNo: classNo,
                    content: contents,
                    teacherNo: user.no,
                    files: arr,
                    title: title,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            console.log(response.data);
            alert(response.data.message);
            navigate("/teacher/reference?page=1");
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
                            <select
                                placeholder="카테고리 선택"
                                defaultValue="category"
                                onChange={cateChange}
                            >
                                <option value="category" disabled>
                                    카테고리
                                </option>
                                <option value="수업자료">수업자료</option>
                                <option value="시험자료">시험자료</option>
                                <option value="문제풀이">문제풀이</option>
                                <option value="과제">과제</option>
                            </select>
                            {classList && (
                                <select
                                    placeholder="반 선택"
                                    defaultValue="class-list"
                                    onChange={classChange}
                                >
                                    <option value="class-list" disabled>
                                        반 목록
                                    </option>
                                    {classList.map(ele => (
                                        <option key={ele.no} value={ele.no}>
                                            {ele.name}
                                        </option>
                                    ))}
                                </select>
                            )}
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
                            <input
                                type="file"
                                accept=".pdf"
                                multiple={true}
                                onChange={fileUpload}
                            />
                        </form>
                    </div>
                    <div className="sectionBt">
                        <button className="cancleBt" onClick={goBack}>
                            취소
                        </button>
                        <button className="completeBt" onClick={writeRef}>
                            완료
                        </button>
                    </div>
                </div>
            </TReferenceWriteCss>
        </>
    );
};

export default TReferenceWrite;
