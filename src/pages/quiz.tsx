import SkiQuiz from "../../components/SkiQuiz";

export default function Quiz() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-col justify-center align-middle mx-10">
        <h1
          className="font-tiltNeon text-center font-extrabold text-transparent text-4xl lg:text-6xl p-3 mx-auto mt-3 mb-2 bg-clip-text
          bg-gradient-to-t from-white via-sky-400 to-white"
        >
          So, what are your expectations?
        </h1>
        <hr className="bg-sky-400 h-1 mt-1 mb-3" />
      </header>
      <SkiQuiz />
    </div>
  );
}
