import React, { useState } from "react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { LuLanguages } from "react-icons/lu";

const LanguageSelector = () => {
  const { i18n } = useTranslation();  
  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);  
  };

  const items = [
    {
      key: "en",
      label: (
        <button onClick={() => changeLanguage("en")} className="flex items-center gap-2">
          English
        </button>
      ),
    },
    {
      key: "ar",
      label: (
        <button
          style={{
            fontFamily: "Tajawal"
          }}
          onClick={() => changeLanguage("ar")} className="flex items-center gap-2">
          عربي
        </button>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        placement="bottom"
      >
        <button className="p-2 rounded-lg border border-gray-300 flex items-center gap-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-400 ">
          <LuLanguages size={18}  />

        </button>
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
