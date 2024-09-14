"use client";

import { useState } from "react";
import Icon from "@/app/components/Icon";

const InputText = ({ onSubmit, placeholder, ariaLabel, isSearch = false }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value.trim() !== "") {
      onSubmit(value.trim());
    }
  };

  const clearInput = () => {
    setValue("");
  };

  return (
    <label className="input input-lg input-bordered input-primary flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
      />
      {value && (
        <button onClick={clearInput} aria-label="close">
          <Icon type="close" />
        </button>
      )}
      {isSearch && (
        <button onClick={() => value.trim() !== "" && onSubmit(value.trim())} aria-label="search">
          <Icon type="search" />
        </button>
      )}
    </label>
  );
};

export default InputText;
