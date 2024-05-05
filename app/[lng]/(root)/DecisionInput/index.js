"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import InputText from "@/app/[lng]/components/InputText";

const DecisionInput = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);

  const onSubmit = () => {
    // TODO: create slice to call api
  };

  return <InputText t={t} onSubmit={onSubmit} isSearch />;
};

export default DecisionInput;
