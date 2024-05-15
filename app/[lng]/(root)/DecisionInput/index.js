"use client";

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

  const onSubmit = () => {
    dispatch(fetchDecision());
  };

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
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DecisionInput;
