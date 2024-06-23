"use client";

import { useRouter } from "next/navigation";

const DecisionResult = ({ answer, image, query }) => {
  const router = useRouter();

  const handleShare = () => {
    const shareData = {
      title: "Decision Result",
      text: `The decision is: ${decision.answer}. It's ${decision.answer === "yes" ? "suitable" : "not suitable"} to do this.`,
      url: window.location.href,
    };

    try {
      navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Your Query:</h2>
        <p className="text-lg font-bold">{query}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Result:</h2>
        <p className={`text-2xl font-bold ${answer === "yes" ? "text-green-500" : "text-red-500"}`}>
          {answer.toUpperCase()}
        </p>
        <img src={image} alt={answer} className="mx-auto mt-4 rounded-lg shadow-md" />
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <button className="rounded bg-green-500 px-4 py-2 text-white" onClick={handleShare}>
          Share Result
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DecisionResult;
