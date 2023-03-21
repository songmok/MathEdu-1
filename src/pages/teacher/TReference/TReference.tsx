import LogoutBt from "../../../components/logoutBt/LogoutBt";
import ReferenceForm from "../../../components/referenceForm/ReferenceForm";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TReferenceCss from "./TReferenceCss";

import reference from "./reference.json";

export interface IReference {
    status: boolean;
    totalPage: number;
    currentPage: number;
    totalCount: number;
    keyword: string;
    list: {
        no: number;
        category: string;
        title: string;
        regDt: string;
        author: {
            no: number;
            name: string;
        };
    }[];
}

const TReference = () => {
    console.log(reference);

    return (
        <>
            <TSidebar />
            <TReferenceCss>
                <header className="header">
                    <p className="title">자료실</p>
                    <LogoutBt />
                </header>
                <section className="section">
                    <ReferenceForm
                        sectionTitle={"자료실"}
                        reference={reference}
                    />
                </section>
            </TReferenceCss>
        </>
    );
};

export default TReference;
