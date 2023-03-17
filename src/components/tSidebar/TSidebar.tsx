import { NavLink } from "react-router-dom";
import TSidebarCss from "./TSidebarCss";

const TSidebar = () => {
    const menu = [
        { name: "클 래 스 관 리", path: "/teacher/class" },
        { name: "성 적 관 리", path: "/teacher/grade" },
        { name: "자 료 실", path: "/teacher/reference" },
        { name: "공 지 사 항", path: "/teacher/notice" },
    ];

    return (
        <TSidebarCss>
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
        </TSidebarCss>
    );
};

export default TSidebar;
