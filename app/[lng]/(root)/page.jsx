"use client";

import { useRef } from "react";
import { useTranslation } from "@/app/i18n/client";
import DecisionInput from "./DecisionInput";
import RecentHistory from "./RecentHistory";

const HomePage = ({ params: { lng } }) => {
  const inputRef = useRef();
  const { t } = useTranslation(lng);

  const handleSelect = (value) => {
    if (inputRef.current) {
      inputRef.current.setValue(value);
    }
  };

  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="flex max-w-full flex-col gap-5 md:max-w-screen-sm">
          <h1 className="whitespace-pre-wrap text-5xl font-bold leading-tight">
            {t("home_title")}
          </h1>
          <p>{t("home_desc")}</p>
          <DecisionInput ref={inputRef} />
          <RecentHistory onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
