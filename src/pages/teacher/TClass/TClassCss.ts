import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";

const TClassCss = styled.div`
    ${mainContainer}
    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        .title {
            color: ${TfontCol};
            font-size: 25px;
        }
    }
    .section {
        background: #fff;
        padding: 30px;
        border-radius: 15px;
        .sectionTop {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            p {
                color: ${TfontCol};
                font-size: 18px;
            }
            .search {
                display: flex;
                align-items: center;
                form {
                    display: flex;
                    .searchBox {
                        border: 2px solid #d9d9d9;
                        height: 30px;
                        border-radius: 5px;
                    }
                    .searchBt {
                        border: none;
                        background: ${TmainCol};
                        color: #fff;
                        height: 30px;
                        width: 70px;
                        border-radius: 5px;
                        margin-left: 15px;
                    }
                }
            }
        }
        .sectionMain {
            .table {
                margin-bottom: 10px;
                border-radius: 5px;
                width: 100%;
                text-align: center;
                thead {
                    .tableHeader {
                        background: ${TmainCol};
                        color: #fff;
                        border: none;
                        height: 50px;
                    }
                }
                tbody {
                    .tableMain {
                        height: 40px;
                        &:hover {
                            background: #f8f9fa;
                        }
                        td {
                            border-bottom: 1px solid rgb(216, 216, 216);
                            .className {
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
            .pagination {
                display: flex;
                justify-content: center;
                .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                    background: ${TmainCol};
                }
            }
        }
    }
`;

export default TClassCss;
