import React from 'react'

function InputField({ name, label, type = "text", placeholder, register, error }) {
  return <>
    <div style={{ marginBottom: "16px" }}>
    <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
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
  </>
}

export default InputField