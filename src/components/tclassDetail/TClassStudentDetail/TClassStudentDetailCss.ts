import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";

export const TClassStudentDetailCss = styled.div`
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
                        width: calc(100% / 6);
                        > img {
                            width: 45%;
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
