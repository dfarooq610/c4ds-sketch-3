import LocationQuestion from "./LocationQuestion";
import MultipleChoiceQuestions from "./MultipleChoiceQuestions";

interface SkiQuestionairreProps {
  getLocation: () => void;
  userLocation: [number, number];
  handleSubmit: () => void;
  answers: string[];
  setAnswers: (answers: string[]) => void;
}

export const SkiQuestionairre = ({
  getLocation,
  userLocation,
  handleSubmit,
  answers,
  setAnswers,
}: SkiQuestionairreProps) => {
  return (
    <>
      <header className="flex flex-col justify-center items-middle h-1/6">
        <h1
          className="font-tiltNeon text-center font-extrabold text-transparent text-4xl lg:text-6xl p-3 mx-auto bg-clip-text
          bg-gradient-to-t from-white via-sky-400 to-white"
        >
          But first, a few questions about your history with skiing.
        </h1>
        <hr className="bg-sky-400 h-1 mt-1 mb-3 mx-8" />
      </header>
      <div className="flex flex-col justify-center items-center w-4/6 m-auto h-5/6">
        {userLocation.includes(Number.MIN_SAFE_INTEGER) ? (
          <LocationQuestion getLocation={getLocation} />
        ) : (
          <MultipleChoiceQuestions
            answers={answers}
            setAnswers={setAnswers}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};
