import { redirect } from "next/navigation";
import { useTranslation } from "@/app/i18n";
import DecisionResult from "./DecisionResult";

export async function generateMetadata({ searchParams, params: { lng } }) {
  const { t } = await useTranslation(lng);
  const { query } = searchParams;

  return {
    title: query ? `${query} | ${t("app_title")}` : t("app_title"),
  };
}

const ResultPage = ({ searchParams, params: { lng } }) => {
  const { answerText, image, query } = searchParams;

  if (!answerText || !image || !query) {
    redirect("/");
  }

  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="flex max-w-full flex-col gap-5 md:max-w-screen-sm">
          <DecisionResult lng={lng} answerText={answerText} image={image} query={query} />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
