import { NavLink } from "react-router-dom";
import SidebarCss from "./SSidebarCss";

const SSidebar = () => {
    const menu = [
        { name: "성 적 관 리", path: "/student/grade" },
        { name: "자 료 실", path: "/student/reference?page=1" },
        { name: "공 지 사 항", path: "/student/notice?page=1" },
        { name: "마 이 페 이 지", path: "/student/mypage" },
    ];

    return (
        <SidebarCss>
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
            </div>
            <div className="menu">
                {menu.map((ele, idx) => {
                    return (
                        <NavLink
                            to={ele.path}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            key={idx}
                        >
                            <span className="menuTitle">{ele.name}</span>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/menu_arrow.png`}
                            />
                        </NavLink>
                    );
                })}
            </div>
        </SidebarCss>
    );
};

export default SSidebar;
