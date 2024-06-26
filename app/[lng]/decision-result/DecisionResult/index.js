"use client";

import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import clsx from "clsx";

const getAnswerText = (answer) => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return `${answer}_${randomIndex}`;
};

const DecisionResult = ({ lng, answer, image, query }) => {
  const { t } = useTranslation(lng);
  const [isLoading, setIsLoading] = useState(true);
  const answerText = getAnswerText(answer);

  return (
    <div>
      <figure className="pb-5">
        {isLoading && <div className="skeleton h-48 w-full sm:h-[300px] sm:w-[400px]" />}
        <img
          src={image}
          alt={answer}
          className={clsx("h-48 w-full rounded-xl object-cover sm:h-[300px] sm:w-[400px]", {
            hidden: isLoading,
            block: !isLoading,
          })}
          onLoad={() => setIsLoading(false)}
        />
      </figure>
      <div className="px-5 text-center">
        <h2 className="mb-1 text-3xl font-bold">{t(answerText)}</h2>
        <p className="text-lg">{query}</p>
      </div>
    </div>
  );
};

export default DecisionResult;
