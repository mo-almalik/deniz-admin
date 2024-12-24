import React from "react";

function FileInput({ label, placeholder, error, className,defaultValue = "" ,onChange}) {

  return  <>
        <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      <input
      
        type="file"
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          width: "100%",
        }}
        className={`${className}`}
        onChange={onChange}
      />
      {error && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {error.message}
        </span>
      )}
    </div>


    </>
}

export default FileInput;
