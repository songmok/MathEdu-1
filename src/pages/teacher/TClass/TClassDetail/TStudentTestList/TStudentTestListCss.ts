import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../../utils/Color";
import { Button, mainContainer } from "../../../../../utils/Layout";

export const TStudentTestListCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .sectionTop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            .sectionTitle {
                color: ${TfontCol};
                font-size: 18px;
            }
            .select {
                select {
                    margin-right: 10px;
                    border: 2px solid #d9d9d9;
                    border-radius: 5px;
                    margin-right: 10px;
                    height: 30px;
                }
            }
        }
        /* Main Section */
        .sectionMain {
            .table {
                border-radius: 5px;
                width: 100%;
                text-align: center;
                margin-bottom: 10px;
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
                    &:hover {
                        background: #f8f9fa;
                    }
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
            .bt-area {
                display: flex;
                justify-content: end;
                margin-bottom: 10px;
                button {
                    ${Button}
                    border: none;
                    border-radius: 5px;
                    background: rgb(32, 30, 89);
                    color: white;
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
    }
    th,
    td {
        border-bottom: 1px solid #d8d8d8;
    }
`;
