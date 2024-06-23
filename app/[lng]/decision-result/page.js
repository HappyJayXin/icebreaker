import { redirect } from "next/navigation";
import DecisionResult from "./DecisionResult";

const ResultPage = ({ searchParams }) => {
  const { answer, image, query } = searchParams;

  if (!answer || !image || !query) {
    redirect("/");
  }

  return <DecisionResult answer={answer} image={image} query={query} />;
};

export default ResultPage;
