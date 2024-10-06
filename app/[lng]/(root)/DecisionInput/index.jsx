"use client";

import { useEffect, forwardRef } from "react";
import clsx from "clsx";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import InputText from "@/app/components/InputText";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecision, setProgress, resetDecision } from "./decisionSlice";
import { STATUS } from "@/app/constants";
import usePlaceholder from "./usePlaceholder";
import useLocalStorage from "@/app/hooks/useLocalStorage";

const DecisionInput = (_, ref) => {
  const router = useRouter();
  const { lng } = useParams();
  const { t } = useTranslation(lng);

  const placeholder = usePlaceholder();
  const [, setHistory] = useLocalStorage("searchHistory", []);

  const dispatch = useDispatch();
  const decision = useSelector((state) => state.decision);

  const onSubmit = (value) => {
    dispatch(fetchDecision({ query: value }));
    setHistory(value);
  };

  // Navigation to result page
  useEffect(() => {
    if (decision.status === STATUS.SUCCEEDED) {
      setTimeout(() => {
        const query = new URLSearchParams({
          answerText: decision.answerText,
          image: decision.image,
          query: decision.query,
        }).toString();
        router.push(`/${lng}/decision-result?${query}`);
        dispatch(resetDecision());
      }, 500);
    }
  }, [decision, router]);

  // Loading progress bar
  useEffect(() => {
    let progressInterval;

    if (decision.status === STATUS.LOADING) {
      progressInterval = setInterval(() => {
        if (decision.progress <= 90) {
          const diff = Math.random() * 10;
          const newProgress = Math.min(decision.progress + diff, 90).toFixed(0);
          dispatch(setProgress(newProgress));
        }
      }, 250);
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [decision]);

  const modalClass = clsx("modal", {
    "modal-open": decision.status === STATUS.LOADING,
  });

  return (
    <>
      <InputText
        isSearch
        ref={ref}
        onSubmit={onSubmit}
        placeholder={t(placeholder)}
        ariaLabel={t("input_search_aria")}
      />

      <dialog id="my_modal_1" className={modalClass}>
        <div className="modal-box w-60 max-w-60">
          <div className="flex flex-col items-center gap-4">
            <span className="loading loading-bars loading-md"></span>
            <p>{t("loading_result")}</p>
            <p>{`${decision.progress}%`}</p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default forwardRef(DecisionInput);
