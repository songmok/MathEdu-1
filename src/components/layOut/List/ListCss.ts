import styled from "styled-components";
import { TfontCol, TmainCol } from "../../../utils/Color";
import { mainContainer } from "../../../utils/Layout";

const ListCss = styled.div`
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
            p {
                color: ${TfontCol};
                font-size: 18px;
            }
            .search {
                display: flex;
                align-items: center;
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
                }
            }
            .pagination {
                display: flex;
                justify-content: center;
            }
        }
    }
`;

export default ListCss;
