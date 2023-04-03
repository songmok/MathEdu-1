import { useEffect, useState } from "react";
import TSidebar from "../../../components/tSidebar/TSidebar";
import TSignupCss from "./TSignupCss";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducer/store";
import { IClassList } from "../TNotice/TNoticeWrite/TNoticeWrite";

const TSignup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [school, setSchool] = useState("");
    const [grade, setGrade] = useState("");
    const [phone, setPhone] = useState("");
    const [parentPhone, setParentPhone] = useState("");
    const [address, setAddress] = useState("");
    const [classNo, setClassNo] = useState("");
    const [file, setFile] = useState<File>();

    const [classList, setClassList] = useState<IClassList[]>([]);

    const user = useSelector((state: RootState) => state.user);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.62:9988/api/teacher/classList/${user.id}`,
            );
            console.log(response.data);
            setClassList(response.data.classList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://192.168.0.62:9988/api/student`,
                {
                    address: address,
                    alternatePhone: parentPhone,
                    birthDate: day,
                    birthMonth: month,
                    birthYear: year,
                    classNo: classNo,
                    id: username,
                    image: file,
                    name: name,
                    phoneNo: phone,
                    pwd: "1234",
                    schoolGrade: grade,
                    schoolNo: school,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );
            console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const years = Array.from({ length: 30 }, (_, i) => 2023 - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const grades = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <>
            <TSidebar />
            <TSignupCss>
                <div className="section">
                    <div className="sectionTop">
                        <p> 학생 등록</p>
                    </div>
                    <div className="sectionMain">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">이름</label>
                                <input
                                    type="text"
                                    className="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="username">
                                <label htmlFor="username">아이디</label>
                                <input
                                    type="text"
                                    className="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    required
                                />
                                <button className="nameBt">중복확인</button>
                            </div>

                            <div>
                                <label htmlFor="birthday">생년월일</label>
                                <select
                                    name="year"
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        연도
                                    </option>
                                    {years.map(year => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <span> 년</span>
                                <select
                                    id="month"
                                    name="month"
                                    value={month}
                                    onChange={e => setMonth(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        월
                                    </option>
                                    {months.map(month => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <span> 월</span>
                                <select
                                    id="day"
                                    name="day"
                                    value={day}
                                    onChange={e => setDay(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        일
                                    </option>
                                    {days.map(day => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                                <span> 일</span>
                            </div>

                            <div>
                                <label htmlFor="school">학교</label>
                                <select
                                    name="school"
                                    value={school}
                                    onChange={e => setSchool(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        학교
                                    </option>
                                    <option value="1">한수</option>
                                    <option value="2">두수</option>
                                    <option value="3">세수</option>
                                </select>
                                <span> 초등학교</span>

                                <select
                                    name="grade"
                                    value={grade}
                                    onChange={e => setGrade(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        학년
                                    </option>
                                    {grades.map(grade => (
                                        <option key={grade} value={grade}>
                                            {grade}
                                        </option>
                                    ))}
                                </select>
                                <span> 학년</span>
                            </div>

                            <div>
                                <label htmlFor="address">주소</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">연락처</label>
                                <input
                                    type="tell"
                                    name="phone"
                                    value={phone}
                                    onChange={e =>
                                        setPhone(
                                            e.target.value
                                                .replace(/[^0-9]/g, "")
                                                .replace(
                                                    /(\d{3})(\d{4})(\d{4})/,
                                                    "$1-$2-$3",
                                                ),
                                        )
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="parentPhone">
                                    보호자 연락처
                                </label>
                                <input
                                    type="text"
                                    className="parentPhone"
                                    value={parentPhone}
                                    onChange={e =>
                                        setParentPhone(
                                            e.target.value
                                                .replace(/[^0-9]/g, "")
                                                .replace(
                                                    /(\d{3})(\d{4})(\d{4})/,
                                                    "$1-$2-$3",
                                                ),
                                        )
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="classroom">반 배정</label>
                                <select
                                    className="classroom"
                                    value={classNo}
                                    defaultValue="class-list"
                                    onChange={e => setClassNo(e.target.value)}
                                    required
                                >
                                    <option value="class-list">반 선택</option>
                                    {classList.map(ele => (
                                        <option key={ele.no} value={ele.no}>
                                            {ele.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="image">사진</label>
                                <input
                                    type="file"
                                    multiple={true}
                                    onChange={fileUpload}
                                />
                            </div>

                            <button type="submit" className="signBt">
                                등 록
                            </button>
                        </form>
                    </div>
                </div>
            </TSignupCss>
        </>
    );
};

export default TSignup;
