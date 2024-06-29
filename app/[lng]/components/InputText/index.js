"use client";

import { useState } from "react";
import Icon from "@/app/[lng]/components/Icon";

const InputText = ({ t, onSubmit, isSearch = false }) => {
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
        placeholder={t("input_search_placeholder")}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label={t("input_search_aria")}
      />
      {value && (
        <button onClick={clearInput}>
          <Icon type="close" />
        </button>
      )}
      {isSearch && (
        <button onClick={() => value.trim() !== "" && onSubmit(value.trim())}>
          <Icon type="search" />
        </button>
      )}
    </label>
  );
};

export default InputText;
