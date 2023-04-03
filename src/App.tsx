import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "./pages/select/Select";

//Student
import SLogin from "./pages/student/SLogin/SLogin";
import SGrade from "./pages/student/SGrade/SGrade";
import SNotice from "./pages/student/SNotice/SNotice";
import SReference from "./pages/student/SReference/SReference";
import SMypage from "./pages/student/SMypage/SMypage";

//Teacher
import TLogin from "./pages/teacher/TLogin/TLogin";
import TSignup from "./pages/teacher/TSignup/TSignup";
import TClass from "./pages/teacher/TClass/TClass";
import TNotice from "./pages/teacher/TNotice/TNotice";
import TReference from "./pages/teacher/TReference/TReference";

import styled from "styled-components";
import TGrade from "./pages/teacher/TGrade/TGrade";

import TNoticePost from "./pages/teacher/TNotice/TNoticePost/TNoticePost";
import Header from "./components/header/Header";
import TClassDetail from "./pages/teacher/TClass/TClassDetail/TClassDetail";

import TReferencePost from "./pages/teacher/TReference/TReferencePost/TReferencePost";
import TReferenceWrite from "./pages/teacher/TReference/TReferenceWrite/TReferenceWrite";
import TStudentInfo from "./pages/teacher/TClass/TClassDetail/TStudentInfo/TStudentInfo";
import TStudentTestList from "./pages/teacher/TClass/TClassDetail/TStudentTestList/TStudentTestList";
import TNoticeWrite from "./pages/teacher/TNotice/TNoticeWrite/TNoticeWrite";
import TReferenceFix from "./pages/teacher/TReference/TReferenceFix/TReferenceFix";
import TNoticeFix from "./pages/teacher/TNotice/TNoticeFix/TNoticeFix";
import TStudentTestDetail from "./pages/teacher/TClass/TClassDetail/TStudentTestList/TStudentTestDetail/TStudentTestDetail";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Center>
                <Routes>
                    <Route path="/" element={<Select />} />
                    {/* 학생 사이트 */}
                    <Route path="/student/*">
                        <Route path="login" element={<SLogin />} />
                        <Route path="grade" element={<SGrade />} />
                        <Route path="notice" element={<SNotice />} />
                        <Route path="reference">
                            <Route path="" element={<SReference />} />
                            <Route path="reference" element={<SReference />} />
                        </Route>
                        <Route path="mypage" element={<SMypage />} />
                    </Route>
                    {/* 선생님 사이트 */}
                    <Route path="/teacher/*">
                        <Route path="login" element={<TLogin />} />
                        <Route path="grade" element={<TGrade />} />
                        <Route path="signup" element={<TSignup />} />
                        <Route path="class">
                            <Route path="" element={<TClass />} />
                            <Route path="detail">
                                <Route path="" element={<TClassDetail />} />
                                <Route
                                    path="studentinfo/:studentId"
                                    element={<TStudentInfo />}
                                />
                                <Route path="test">
                                    <Route
                                        path=""
                                        element={<TStudentTestList />}
                                    />
                                    <Route
                                        path="testdetail"
                                        element={<TStudentTestDetail />}
                                    />
                                </Route>
                            </Route>
                        </Route>
                        <Route path="notice">
                            <Route path="" element={<TNotice />} />
                            <Route path="post" element={<TNoticePost />} />
                            <Route path="write" element={<TNoticeWrite />} />
                            <Route path="fix" element={<TNoticeFix />} />
                        </Route>
                        <Route path="reference">
                            <Route path="" element={<TReference />} />
                            <Route path="post" element={<TReferencePost />} />
                            <Route path="write" element={<TReferenceWrite />} />
                            <Route path="fix" element={<TReferenceFix />} />
                        </Route>
                    </Route>
                </Routes>
            </Center>
        </BrowserRouter>
    );
}

const Center = styled.div`
    display: flex;
`;

export default App;
