import { redirect } from "next/navigation";
import DecisionResult from "./DecisionResult";

const ResultPage = ({ searchParams, params: { lng } }) => {
  const { answer, image, query } = searchParams;

  if (!answer || !image || !query) {
    redirect("/");
  }

  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="flex max-w-md flex-col gap-5 md:max-w-xl">
          <DecisionResult lng={lng} answer={answer} image={image} query={query} />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
