import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../../utils/Color";
export const TClassTestCss = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 15px;
    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        > span {
            color: ${TfontCol};
            font-size: 13px;
            font-weight: bold;
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
                width: 100%;
                > td {
                    font-size: 20px;
                    padding: 15px 0;
                }
            }
        }
        .pagination {
            display: flex;
            justify-content: center;
        }
    }
`;
