import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";

export const TClassTestCss = styled.div`
    background-color: #fff;
    padding: 30px;
    padding-bottom: 15px;
    border-radius: 15px;
    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        > span {
            color: ${TfontCol};
            font-size: 20px;
            font-weight: 500;
        }
        button {
            background: transparent;
            border: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 30px;
            border: medium none;
            border-radius: 5px;
            cursor: pointer;
            background: ${TfontCol};
            margin-left: 15px;
            span {
                color: white;
                display: block;
            }
        }
    }
    .sectionMain {
        .table {
            border-radius: 5px;
            text-align: center;
            position: relative;
            .tableHeader {
                color: #fff;
                border: none;
                overflow: hidden;
                background: ${TfontCol};
            }
            /* 선생님 - 반 학생 헤더 */
            .teacherTableHeader {
                background: ${TfontCol};
                color: #fff;
                border: none;
                height: 50px;
            }
            .tableMain {
                overflow: hidden;
                &:hover {
                    background: #f8f9fa;
                }
                > td {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                    padding: 16px 0;
                    border-bottom: 1px solid rgb(216, 216, 216);
                }
                .linkname {
                    cursor: pointer;
                    &:hover {
                        color: ${TfontCol};
                    }
                }
            }
        }
    }
`;
