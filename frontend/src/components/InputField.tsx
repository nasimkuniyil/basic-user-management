import React from "react";
import type { IInputField } from "../interfaces/interfaces";

const InputField: React.FC<IInputField> = ({
  title,
  type,
  placeholder,
  disabled,
  value,
}) => {
  return (
    <div className="w-full mt-3">
      <h5 className="mb-1 text-slate-500">{title || "title"}</h5>
      <input
        value={value || ""}
        type={type || "text"}
        disabled={disabled}
        placeholder={placeholder || title}
        className={`w-full outline outline-blue-200 rounded focus:outline-blue-500 text-slate-800 py-2 px-3 placeholder-slate-400  ${
          disabled && "bg-slate-100 outline-0"
        }`}
      />
    </div>
  );
};

export default InputField;
