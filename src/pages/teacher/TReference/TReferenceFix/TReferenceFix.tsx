import TSidebar from "../../../../components/tSidebar/TSidebar";
import TReferenceFixCss from "./TReferenceFixCss";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../reducer/store";

// React-Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Loading from "../../../../components/loading/Loading";
import { IReference } from "../TReferencePost/TReferencePost";

const TReferenceFix = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const QuillRef = useRef<ReactQuill>();
    const user = useSelector((state: RootState) => state.user);

    const [handler, setHandler] = useState(false);
    const [reference, setReference] = useState<IReference>();
    const [title, setTtitle] = useState(state.title);
    const [contents, setContents] = useState(state.contents);
    const [files, setFiles] = useState<File[]>([]);
    const [cate, setCate] = useState(state.category);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/bbs/detail/${state.no}`,
            );
            setReference(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [handler]);

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

    const fixRef = async () => {
        try {
            const arr = new Array();

            for (let i = 0; i < files.length; i++) {
                arr.push(files[i]);
            }

            const response = await axios.patch(
                `http://192.168.0.62:9988/api/bbs/${state.no}`,
                {
                    category: cate,
                    classNo: state.classNo,
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
            navigate(`/teacher/reference/post?no=${state.no}`);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteFile = async (fileName: React.MouseEvent<HTMLSpanElement>) => {
        if (window.confirm(" 정말 삭제하시겠습니까?")) {
            try {
                const response = await axios.delete(
                    `http://192.168.0.62:9988/api/bbs/file/${state.no}/${fileName}`,
                );
                console.log(response.data);
                setHandler(!handler);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <TSidebar />
            <TReferenceFixCss>
                {reference ? (
                    <div className="section">
                        <div className="sectionTop">
                            <p>자료실 작성</p>
                        </div>
                        <div className="sectionMain">
                            <form className="title-area">
                                <textarea
                                    placeholder="제목을 입력해주세요."
                                    value={title}
                                    onChange={contentTitle}
                                />
                                <select
                                    placeholder="카테고리 선택"
                                    defaultValue={state.category}
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
                            {reference.files.length !== 0 ? (
                                <div className="old-file">
                                    <span>첨부 파일</span>
                                    {reference.files.map(
                                        (ele: any, idx: any) => (
                                            <div key={idx}>
                                                <span>{ele.fileName}</span>
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/Delete.png`}
                                                    className="xBt"
                                                    onClick={e =>
                                                        deleteFile(ele.fileName)
                                                    }
                                                />
                                            </div>
                                        ),
                                    )}
                                </div>
                            ) : null}
                            <form className="file-area">
                                <label>파일 추가</label>
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
                            <button className="fixBt" onClick={fixRef}>
                                완료
                            </button>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}
            </TReferenceFixCss>
        </>
    );
};

export default TReferenceFix;
