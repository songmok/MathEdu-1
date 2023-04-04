import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";

export const TClassTestCss = styled.div`
    background-color: #fff;
    padding: 30px;
    padding-right: 15px;
    padding-bottom: 15px;
    border-radius: 15px;
    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        > span {
            color: ${TfontCol};
            font-size: 20px;
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
            background: rgb(32, 30, 89);
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
                background: ${TmainCol};
                color: #fff;
                border: none;
                overflow: hidden;
                th {
                    padding: 5px 76px;
                }
            }
            /* 선생님 - 반 학생 헤더 */
            .teacherTableHeader {
                background: ${TmainCol};
                color: #fff;
                border: none;
                height: 50px;
            }
            .tableMain {
                overflow: hidden;
                > td {
                    max-width: 50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 20px;
                    padding: 15px 0;
                    .linkname {
                        cursor: pointer;
                        &:hover {
                            border-bottom: 1px solid;
                            padding-bottom: 1px;
                            color: ${TfontCol};
                        }
                    }
                }
            }
        }
    }
`;
