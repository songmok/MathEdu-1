import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../utils/Color";
import { mainContainer } from "../../../../utils/Layout";

export const TClassTestDetailCss = styled.div`
    .wrap {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .sectionTop {
            display: flex;
            justify-content: space-between;
            p {
                padding-bottom: 15px;
                color: ${TfontCol};
                font-size: 18px;
            }
        }
        .sectionMain {
            .table {
                border-radius: 5px;
                width: 100%;
                text-align: center;

                .tableHeader {
                    background: ${TmainCol};
                    color: #fff;
                    border: none;
                    height: 50px;
                }
                /* 선생님 - 반 학생 헤더 */
                .teacherTableHeader {
                    background: ${TmainCol};
                    color: #fff;
                    border: none;
                    height: 50px;
                }
                .tableMain {
                    height: 40px;
                    width: 100%;
                    > td {
                        > img {
                            width: 100px;
                        }
                        .linkname {
                            cursor: pointer;
                            &:hover {
                                border-bottom: 1px solid;
                                padding-bottom: 1px;
                                color: ${TfontCol};
                            }
                        }
                        button {
                            border: none;
                            height: 30px;
                            width: 50px;
                            border-radius: 5px;
                            margin-right: 5px;
                            cursor: pointer;
                            color: white;
                        }
                        .re {
                            background-color: #a7a390;
                        }
                        .wr {
                            background-color: #1f1d58;
                        }
                    }
                }
            }
            .pagination {
                display: flex;
                justify-content: center;
            }
        }
    }
`;
