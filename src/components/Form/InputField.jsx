import React from "react";

function InputField({ name, label, type = "text", placeholder, register, error, className,defaultValue = "" }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      <input
        {...(register ? register(name) : {})}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          width: "100%",
        }}
        className={`${className}`}
      />
      {error && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default InputField;
