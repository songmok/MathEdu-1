import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../../utils/Color";
import { mainContainer } from "../../../../../utils/Layout";

export const TStudentTestListCss = styled.section`
    ${mainContainer}

    /* Header */
    .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        > span {
            color: ${TfontCol};
            font-size: 18px;
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
            background: rgb(32, 30, 89);
            margin-left: 15px;
            span {
                color: white;
                display: block;
            }
        }
    }

    /* Main Section */
    .sectionMain {
        .table {
            border-radius: 5px;
            width: 100%;
            text-align: center;

            /* Table Header */
            .tableHeader {
                background: ${TmainCol};
                color: #fff;
                border: none;
                height: 50px;
            }

            /* Table Rows */
            .tableMain {
                height: 40px;
                > td {
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
        .select {
            text-align: right;
            select {
                margin-right: 10px;
                margin-top: 20px;
                padding: 8px;
                border: 1px solid ${TmainCol};
                border-radius: 5px;
                background-color: transparent;
                color: ${TmainCol};
                cursor: pointer;
            }
        }
        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;

            .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                background: ${TmainCol};
            }
        }
    }
`;
