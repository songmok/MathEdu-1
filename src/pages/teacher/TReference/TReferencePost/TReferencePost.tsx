import { useNavigate, useSearchParams } from "react-router-dom";
import TSidebar from "../../../../components/tSidebar/TSidebar";
import TReferencePostCss from "./TReferencePostCss";

import axios from "axios";
import { useEffect, useState } from "react";

//  임시 데이터
import referencePost from "./referencePost.json";

interface IReference {
    no: number;
    category: string;
    title: string;
    regDt: string;
    contents: string;
    authorName: string;
    authorno: number;
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

const TReferencePost = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const bbsNo = searchParams.get("no");

    const [reference, setReference] = useState<IReference>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/bbs/detail/${bbsNo}`,
            );
            console.log(response.data);
            const fetchedReference = response.data;
            fetchedReference.contents = fetchedReference.contents ?? "";
            setReference(fetchedReference);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const goNotice = () => {
        navigate("/teacher/reference");
    };

    return (
        <>
            <TSidebar />
            <TReferencePostCss>
                <section className="section">
                    <p className="section-title">자료실</p>
                    <div className="notice-board">
                        <div className="title-area">
                            <span>{reference?.category}</span>
                            <div className="title">{reference?.title}</div>
                        </div>
                        <div className="info-area">
                            <p>
                                <strong>작성자</strong>
                                <span>{reference?.authorName} 선생님</span>
                            </p>
                            <p>
                                <strong>등록일</strong>
                                <span>{reference?.regDt}</span>
                            </p>
                        </div>

                        <div className="content-area">
                            {reference?.contents !== undefined && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: reference?.contents,
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
                                    {reference?.prevPost?.title}
                                </span>
                            </p>
                            <p className="next">
                                <span>다음</span>
                                <span className="next-title">
                                    {reference?.nextPost?.title}
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
            </TReferencePostCss>
        </>
    );
};

export default TReferencePost;
