"use client";

import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import clsx from "clsx";

const DecisionResult = ({ lng, answerText, image, query }) => {
  const { t } = useTranslation(lng);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="card bg-base-100 shadow-xl lg:card-side">
      <figure>
        {isLoading && <div className="skeleton h-48 w-full sm:h-[300px] sm:w-[400px]" />}
        <img
          src={image}
          alt={t(answerText)}
          className={clsx("h-48 w-full rounded-xl object-cover sm:h-[300px] sm:w-[400px]", {
            hidden: isLoading,
            block: !isLoading,
          })}
          onLoad={() => setIsLoading(false)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left text-2xl">{query}</h2>
        <p className="text-left text-xl font-medium">{t(answerText)}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary"></button>
        </div> */}
      </div>
    </div>
  );
};

export default DecisionResult;
