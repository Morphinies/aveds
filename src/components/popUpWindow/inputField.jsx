import React from "react";
import s from "./authWindow.module.css";

const InputField = ({
    name,
    type,
    error,
    formValue,
    updateValue,
    placeholder,
}) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={formValue}
                placeholder={placeholder}
                onChange={(e) => updateValue(e.target)}
            />
            <p className={s.errorMes}>{error && error + "*"}</p>
        </div>
    );
};

export default InputField;
