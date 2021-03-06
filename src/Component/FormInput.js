import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
    e.preventDefault();
  };

  return (
    <>
      <label>{label}</label>
      <input
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </>
  );
};

export default FormInput;
