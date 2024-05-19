"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import InputText from "@/app/[lng]/components/InputText";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecision } from "./slices/decisionSlice";
import { STATUS } from "@/app/constants";

const DecisionInput = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  const dispatch = useDispatch();
  const decision = useSelector((state) => state.decision);

  const [progress, setProgress] = useState(0);

  const onSubmit = () => {
    dispatch(fetchDecision());
  };

  useEffect(() => {
    let progressInterval;

    if (decision.status === STATUS.LOADING) {
      progressInterval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 90) {
            return oldProgress;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 90);
        });
      }, 500);

      return () => {
        clearInterval(progressInterval);
      };
    } else if (decision.status === STATUS.SUCCEEDED || decision.status === STATUS.FAILED) {
      setProgress(100);
      setTimeout(() => setProgress(0), 500); // reset progress after short delay
    } else {
      setProgress(0);
    }
  }, [decision.status]);

  const modalClass = clsx("modal", {
    "modal-open": decision.status === STATUS.LOADING,
  });

  return (
    <>
      <InputText t={t} onSubmit={onSubmit} isSearch />

      <dialog id="my_modal_1" className={modalClass}>
        <div className="modal-box w-60 max-w-60">
          <div className="flex flex-col items-center gap-4">
            <span className="loading loading-bars loading-md"></span>
            <p>{t("loading_result")}</p>
            <p>{`${progress.toFixed(0)}%`}</p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DecisionInput;
