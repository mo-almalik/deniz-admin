import React from "react";

function TextAreaField({ name, label, placeholder, register, error, defaultValue = "" }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      <textarea
        {...(register ? register(name) : {})}
        rows={4}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          width: "100%",
        }}
      />
      {error && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default TextAreaField;
