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
        position: relative;
        height: 652px;
        .sectionTop {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            p {
                color: ${TfontCol};
                font-size: 20px;
                font-weight: 500;
            }
            .search {
                display: flex;
                align-items: center;
                form {
                    display: flex;
                    .searchBox {
                        border: 1px solid #d9d9d9;
                        height: 30px;
                        border-radius: 5px;
                        padding: 0 5px;
                    }
                    .searchBt {
                        background: ${TfontCol};
                        border: none;
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
                margin-bottom: 20px;
                border-radius: 5px;
                width: 100%;
                text-align: center;
                thead {
                    .tableHeader {
                        background: ${TfontCol};
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
                        }
                        .className {
                            cursor: pointer;
                            > span {
                                &:hover {
                                    color: ${TfontCol};
                                }
                            }
                        }
                    }
                }
            }
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
`;
export default TClassCss;
