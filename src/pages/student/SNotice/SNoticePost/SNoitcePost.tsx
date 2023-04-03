import { useNavigate, useSearchParams } from "react-router-dom";
import SSidebar from "../../../../components/sSidebar/SSidebar";
import SNoticePostCss from "./SNoticePostCss";

import axios from "axios";
import { useEffect, useState } from "react";
import { INotice } from "../../../teacher/TNotice/TNoticePost/TNoticePost";

const SNoticePost = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const noticeNo = searchParams.get("no");

    const [notice, setNotice] = useState<INotice>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/notice/detail/${noticeNo}`,
            );
            console.log(response.data);
            const fetchedNotice = response.data;
            fetchedNotice.contents = fetchedNotice.contents ?? "";
            setNotice(fetchedNotice);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [noticeNo]);

    const goNotice = () => {
        navigate("/student/notice?page=1");
    };

    const goPrev = () => {
        navigate(`/student/notice/post?no=${notice?.prevPost?.no}`);
    };
    const goNext = () => {
        navigate(`/student/notice/post?no=${notice?.nextPost?.no}`);
    };

    return (
        <>
            <SSidebar />
            <SNoticePostCss>
                <section className="section">
                    <p className="section-title">자료실</p>
                    <div className="notice-board">
                        <div className="title-area">
                            <span>{notice?.category}</span>
                            <div className="title">{notice?.title}</div>
                        </div>
                        <div className="info-area">
                            <p>
                                <strong>작성자</strong>
                                <span>{notice?.authorName} </span>
                            </p>
                            <p>
                                <strong>등록일</strong>
                                <span>
                                    {notice?.regDt.toString().slice(0, 10)}
                                </span>
                            </p>
                        </div>

                        <div className="content-area">
                            {notice?.contents !== undefined && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: notice?.contents,
                                    }}
                                ></p>
                            )}
                        </div>

                        <div className="file-area">
                            <span className="file">첨부파일</span>
                            {notice?.files ? (
                                <div className="file-list">
                                    {notice.files.map(file => (
                                        <div key={file.fileName}>
                                            <a
                                                href={`http://192.168.0.62:9988${file.downloadURL}`}
                                                download
                                                title="파일 다운로드"
                                            >
                                                {file.fileName}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span>없음</span>
                            )}
                        </div>

                        <div className="prevnext-area">
                            <p className="prev">
                                <span>이전</span>
                                {notice?.prevPost ? (
                                    <span
                                        className="prev-title"
                                        onClick={goPrev}
                                    >
                                        {notice?.prevPost?.title}
                                    </span>
                                ) : (
                                    <span className="prev-titleNo">
                                        이전글이 없습니다.
                                    </span>
                                )}
                            </p>
                            <p className="next">
                                <span>다음</span>
                                {notice?.nextPost ? (
                                    <span
                                        className="next-title"
                                        onClick={goNext}
                                    >
                                        {notice?.nextPost?.title}
                                    </span>
                                ) : (
                                    <span className="next-titleNo">
                                        다음글이 없습니다.
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="button-area">
                            <div>
                                <button className="listBt" onClick={goNotice}>
                                    목록
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </SNoticePostCss>
        </>
    );
};

export default SNoticePost;
