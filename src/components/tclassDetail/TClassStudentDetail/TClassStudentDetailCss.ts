import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";

export const TClassStudentDetailCss = styled.div`
    padding: 30px;
    padding-top: 0px;
    margin-left: 250px;
    width: 92%;
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
                text-align: center;

                .tableHeader {
                    background: ${TfontCol};
                    color: #fff;
                    border: none;
                    height: 50px;
                }
                /* 선생님 - 반 학생 헤더 */
                .teacherTableHeader {
                    background: ${TfontCol};
                    color: #fff;
                    border: none;
                    height: 50px;
                }
                .tableMain {
                    height: 40px;
                    width: 100%;
                    &:hover {
                        background: #f8f9fa;
                    }
                    > td {
                        width: calc(100% / 6);
                        height: 130px;
                        border-bottom: 1px solid rgb(216, 216, 216);
                        > img {
                            width: 25%;
                        }
                    }
                    .linkname {
                        cursor: pointer;
                        &:hover {
                            padding-bottom: 1px;
                            color: ${TfontCol};
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
