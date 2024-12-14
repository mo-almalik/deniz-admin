import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideBar() {
  const { isOpen } = useSelector((state) => state.sidebar);
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <>
 <aside
  style={{ background: themeMode === "light" ? "#FFF" : "#273142" }}
  className={`transition-all duration-500 drop-shadow-sm h-full ${
    isOpen ? "w-64" : "w-0"
  } overflow-hidden`} // أضف overflow-hidden
>
  <div
    className={`px-4 ${
      isOpen ? "opacity-100" : "opacity-0"
    } transition-opacity duration-300`}
  >
    <div className="py-5">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white p-3 rounded-md border border-gray-200">
        Dashboard
      </h3>
    </div>
    <ul className="flex flex-col gap-y-4">
      <li className="">
        <NavLink to={"/"} className={"dark:text-white "}>
          Home
        </NavLink>
      </li>
    </ul>
  </div>
</aside>

    </>
  );
}

export default SideBar;
