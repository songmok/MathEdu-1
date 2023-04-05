import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../../../utils/Color";
import { Button, mainContainer } from "../../../../../utils/Layout";

export const TStudentTestListCss = styled.div`
    ${mainContainer}
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        height: 652px;
        position: relative;
        .sectionTop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
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
                margin-bottom: 20px;
                /* Table Header */
                .tableHeader {
                    background: ${TfontCol};
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
                    }
                    .linkname {
                        cursor: pointer;
                        &:hover {
                            color: ${TfontCol};
                        }
                        &:hover {
                            color: ${TfontCol};
                        }
                    }
                }
            }
            .bt-area {
                display: flex;
                justify-content: end;
                margin-bottom: 20px;
                button {
                    ${Button}

                    border: none;
                    border-radius: 5px;
                    background: ${TfontCol};
                    color: white;
                }
            }
            /* Pagination */
            .pagination {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, -15px);
                display: flex;
                justify-content: center;
                .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                    background: ${TfontCol};
                }
            }
        }
    }
    th,
    td {
        border-bottom: 1px solid #d8d8d8;
    }
`;
