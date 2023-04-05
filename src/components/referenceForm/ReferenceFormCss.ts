import styled from "styled-components";
import { SfontCol, SmainCol, TfontCol, TmainCol } from "../../utils/Color";
import { Button } from "../../utils/Layout";

const ReferenceFormCss = styled.div`
    .sectionTop {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .ps {
            color: ${SfontCol};
            font-size: 20px;
            font-weight: 500;
        }
        .pt {
            color: ${TfontCol};
            font-size: 20px;
            font-weight: 500;
        }
        .search {
            display: flex;
            .selectLIst {
                border-radius: 5px;
                border: 1px solid #d9d9d9;
                margin-right: 10px;
                padding: 0 5px;
            }
            form {
                display: flex;
                .searchBox {
                    border: 1px solid #d9d9d9;
                    height: 30px;
                    border-radius: 5px;
                    padding: 0 5px;
                }
                .searchBt {
                    ${Button}
                    background: ${TmainCol};
                    margin-left: 10px;
                }
                .searchBtS {
                    ${Button}
                    background: ${SmainCol};
                    margin-left: 10px;
                }
            }
        }
    }
    .sectionMain {
        margin-bottom: 20px;
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
            .tableHeaderS {
                background: ${SmainCol};
                color: #fff;
                border: none;
                height: 50px;
            }
            .tableMain {
                height: 40px;
                &:hover {
                    background: #f8f9fa;
                }
                .referenceName {
                    cursor: pointer;
                    text-align: left;
                    padding-left: 20px;
                }
            }
            .noRef {
                padding: 100px 0;
            }
        }
    }
    th,
    td {
        border-bottom: 1px solid #d8d8d8;
    }
`;

export default ReferenceFormCss;
