"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import useLocalStorage from "@/app/hooks/useLocalStorage";

const RecentHistory = ({ onSelect }) => {
  const { lng } = useParams();
  const { t } = useTranslation(lng);
  const { storedValue, deleteItem } = useLocalStorage("searchHistory", []);

  const handleDelete = (item) => {
    deleteItem(item);
  };

  const renderHistory = () => {
    if (storedValue.length === 0) {
      return <p className="text-gray-500">{t("no_recent_searches")}</p>;
    }
    return (
      <ul className="flex max-w-sm flex-wrap gap-2 overflow-x-auto">
        {storedValue.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <p
              onClick={() => onSelect(item)}
              className="badge badge-primary cursor-pointer select-none"
            >
              {item}
            </p>
            <button onClick={() => handleDelete(item)} className="text-red-500 hover:text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex items-center gap-2">
      <h2 className="text-xl">{t("recent_history")}:</h2>
      {renderHistory()}
    </div>
  );
};

export default RecentHistory;
