import { useNavigate, useSearchParams } from "react-router-dom";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import TNoticePostCss from "./TNoticePostCss";

import axios from "axios";
import { useEffect, useState } from "react";

//  임시 데이터
import noticePost from "./noticePost.json";

interface INotice {
    no: number;
    category: string;
    title: string;
    regDt: string;
    contents: string;
    author: {
        no: number;
        name: string;
    };
    files: {
        fileName: string;
        fileType: string;
        downloadURL: string;
    }[];
    prevPost?: {
        no: number;
        title: string;
    };
    nextPost?: {
        no: number;
        title: string;
    };
}

const TNoticePost = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const no = searchParams.get("no");

    const [notice, setNotice] = useState<INotice>();

    const fetchData = async () => {
        try {
            // const response = await axios.get(
            //     `https://example.com/api/notice/${no}`,
            // );
            // console.log(response.data);
            // setNotice(response.data);
            console.log(noticePost);
            const fetchedNotice = noticePost;
            fetchedNotice.contents = fetchedNotice.contents ?? "";
            setNotice(fetchedNotice);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const goNotice = () => {
        navigate("/teacher/notice");
    };

    return (
        <>
            {/* <TSidebar /> */}
            <TNoticePostCss>
                <section className="section">
                    <p className="section-title">공지사항</p>
                    <div className="notice-board">
                        <div className="title-area">
                            <span>{notice?.category}</span>
                            <div className="title">{notice?.title}</div>
                        </div>
                        <div className="info-area">
                            <p>
                                <strong>작성자</strong>
                                <span>{notice?.author.name} 선생님</span>
                            </p>
                            <p>
                                <strong>등록일</strong>
                                <span>{notice?.regDt}</span>
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
                            <a href="" title="파일 다운로드">
                                <span className="iconset ico-file">
                                    첨부파일
                                </span>
                                &nbsp;2022년_공공데이터_활용기업_실태조사_보고서_(배포용).pdf
                            </a>
                        </div>

                        <div className="prevnext-area">
                            <p className="prev">
                                <span>이전</span>
                                <span className="prev-title">
                                    {notice?.prevPost?.title}
                                </span>
                            </p>
                            <p className="next">
                                <span>다음</span>
                                <span className="next-title">
                                    {notice?.nextPost?.title}
                                </span>
                            </p>
                        </div>

                        <div className="button-area">
                            <div>
                                <button className="listBt" onClick={goNotice}>
                                    목록
                                </button>
                            </div>
                            <div className="button-right">
                                <button className="deleteBt">삭제</button>
                                <button className="modifyBt">수정</button>
                            </div>
                        </div>
                    </div>
                </section>
            </TNoticePostCss>
        </>
    );
};

export default TNoticePost;
