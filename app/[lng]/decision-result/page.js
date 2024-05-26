import { redirect } from "next/navigation";

const ResultPage = ({ searchParams }) => {
  const { answer, image, query } = searchParams;

  if (!answer || !image || !query) {
    redirect("/");
  }

  return <div>DecisionResult</div>;
};

export default ResultPage;
