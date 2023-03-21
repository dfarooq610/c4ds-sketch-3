import { useState } from "react";
import LocationQuestion from "../../components/quiz/LocationQuestion";
import Questionairre from "../../components/quiz/MultipleChoiceQuestions";
import { SkiQuestionairre } from "../../components/quiz/SkiQuestionairre";
import ResortsList from "../../components/results/ResortsList";
import { questions } from "../../services/questions";

export default function Quiz() {
  const [userLocation, setUserLocation] = useState<[number, number]>([
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ]);
  const [answers, setAnswers] = useState<string[]>(questions.map(() => ""));

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          console.log(userLocation);
        },
        (error) => {
          alert("Unable to retrieve your location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <div className="flex flex-col h-screen">
      {answers.includes("") ? (
        <SkiQuestionairre
          userLocation={userLocation}
          getLocation={getLocation}
          answers={answers}
          setAnswers={setAnswers}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ResortsList />
      )}
    </div>
  );
}
