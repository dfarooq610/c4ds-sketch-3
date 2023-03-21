import { useState } from "react";
import { questions } from "../../services/questions";

type QuestionairreProps = {
  answers: string[];
  setAnswers: (answers: string[]) => void;
  handleSubmit: () => void;
};

export default function Questionairre({
  answers,
  setAnswers,
  handleSubmit
}: QuestionairreProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="w-full">
      {/* Progress */}
      <h3 className="text-slate-500 text-3xl font-bold my-2">
        {" "}
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      {/* Question */}
      <h2 className="text-slate-100 text-4xl font-bold">
        {questions[currentQuestion].questionText}
      </h2>
      {/* Options */}
      <div className="flex flex-col justify-center">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`bg-slate-700 hover:bg-slate-600 text-left text-xl text-slate-100 font-bold py-2 px-4 rounded my-2 ${
              answers[currentQuestion] === option ||
              answers[currentQuestion] === ""
                ? "opacity-100"
                : "opacity-60"
            }`}
            onClick={() => {
              const newAnswers = [...answers];
              newAnswers[currentQuestion] = option;
              setAnswers(newAnswers);
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Control Flow */}
      <div className="flex justify-between mt-4 text-white text-2xl">
        <button
          className={`w-[49%] py-3 bg-sky-600 rounded-lg ${
            currentQuestion === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-sky-500"
          }`}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className={`w-[49%] py-3 rounded-lg bg-sky-600 hover:bg-sky-500 ${
            answers[currentQuestion] === ""
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() =>
            currentQuestion === questions.length - 1
              ? handleSubmit()
              : handleNext()
          }
        >
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
