import React from "react";
import { useTranslation } from "react-i18next";

const Button = ({
  children,
  type = "button",
  onClick,
  size = "medium",
  disabled = false,
  loading = false,
  css,
}) => {
  // أنماط الزر بناءً على الخصائص
  const baseStyle = {
    display: "inline-block",
    padding: size === "small" ? "8px 12px" : size === "large" ? "14px 20px" : "10px 16px",
    fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
    borderRadius: "4px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background-color 0.3s ease, transform 0.2s ease",
 
  };
const {t} = useTranslation()
  return (
    <button
    className={`${css} bg-primary text-white dark:bg-dark dark:text-white`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ ...baseStyle}}

    >
      {loading ? t('msg.loading') : children}
    </button>
  );
};

export default Button;
