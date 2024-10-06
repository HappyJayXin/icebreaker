"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import useLocalStorage from "@/app/hooks/useLocalStorage";

const RecentHistory = ({ onSelect }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  const [history] = useLocalStorage("searchHistory");

  const renderHistory = () => {
    if (history.length === 0) {
      return <p className="text-gray-500">{t("no_recent_searches")}</p>;
    }
    return (
      <ul className="flex max-w-sm flex-wrap gap-2 overflow-x-auto">
        {history.map((item, index) => (
          <li key={index}>
            <p
              onClick={() => onSelect(item)}
              className="badge badge-primary cursor-pointer select-none"
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex items-start gap-2">
      <h2 className="text-xl">{t("recent_history")}:</h2>
      {renderHistory()}
    </div>
  );
};
export default RecentHistory;
