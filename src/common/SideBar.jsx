import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronDown, LuChevronUp, LuHeartHandshake, LuLayoutDashboard, LuLayoutList, LuMail, LuPackage, LuSettings, LuTarget, LuUsers } from "react-icons/lu";
import { useSelector } from "react-redux";
import { TbCubeSend } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function SideBar() {
  const { t } = useTranslation();
  const { isOpen } = useSelector((state) => state.sidebar);
  const themeMode = useSelector((state) => state.theme.mode);

  const [openSection, setOpenSection] = useState(null);

  // وظيفة لفتح/إغلاق الأقسام
  const toggleSection = (key) => {
    setOpenSection((prevKey) => (prevKey === key ? null : key));
  };

  const items = [
    {
      id: 1,
      title: t("dashboard"),
      path: "/admin",
      icon: <LuLayoutDashboard size={20}  />,
    },
    {
      id: 3,
      title: t("products"),
      path: "/products",
      icon: <LuPackage  size={20}  />,
      subItems: [
        { id: 31, title: t("all-products"), path: "/products/all" },
        { id: 32, title: t("add-product"), path: "/products/add" },
      ],
    },
    {
      id: 4,
      title: t("orders"),
      path: "/orders",
      icon: <LuLayoutList  size={20}  />,
    },
    {
      id: 5,
      title: t("services"),
      path: "/services",
      icon: <LuTarget  size={20}  />,
    },
    {
      id: 6,
      title: t("shipping"),
      path: "/shipping",
      icon: <TbCubeSend  size={22}  />,
    },
    {
      id: 2,
      title: t("users"),
      icon: <LuUsers size={20}  />,
      subItems: [
        { id: 21, title: t("all-users"), path: "/users/all" },
        { id: 22, title: t("add-user"), path: "/users/add" },
      ],
    },
    {
      id: 7,
      title: t("messages"),
      path: "/messages",
      icon: <LuMail size={20}  />,
    },
    {
      id: 8,
      title: t("our-partners"),
      path: "/our-partners",
      icon: <LuHeartHandshake  size={20}  />,
    },
    {
      id: 9,
      title: t("settings"),
      path: "/settings",
      icon: <LuSettings size={20}  />,
    },
  ];

  return (
    <aside
      style={{ background: themeMode === "light" ? "#FFF" : "#273142" }}
      className={`transition-all duration-500 drop-shadow-sm h-full ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div
        className={`px-4 ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="py-5">
          <h1 className="text-2xl font-bold text-gray-800 capitalize dark:text-white p-3 rounded-md border border-gray-200">
             <span className="text-primary tracking-wide">deniz</span> Group
          </h1>
        </div>
        <ul className="flex flex-col gap-y-4 dark:text-white text-md ">
          {items.map((el) => (
            <li key={el.id} className="flex flex-col gap-y-1 transition-all duration-600">
              {el.subItems ? (
                <>
                  <div
                    onClick={() => toggleSection(el.id)}
                    className="flex hover:text-primary  dark:text-gray-300 text-gray-700 items-center transition-all duration-500 gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {el.icon}
                    <span className="flex-grow ">{el.title}</span>
                    <span className="transition-all duration-300 ">
                      {openSection === el.id ? <LuChevronUp /> : <LuChevronDown />}
                    </span>
                  </div>
                  {openSection === el.id && (
                    <ul className="ml-4 flex flex-col ">
                      {el.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `flex items-center transition-all duration-500 p-2 rounded-md ${
                                isActive
                                  ? "bg-primary text-white"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                              }`
                            }
                          >
                            <span>{subItem.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={el.path}
                  className={({ isActive }) =>
                    `flex items-center transition-all duration-500 gap-3 p-2 rounded-md hover:text-primary  ${
                      isActive
                        ? "bg-primary text-white hover:text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {el.icon}
                  <span>{el.title}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
