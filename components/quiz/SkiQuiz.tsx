import { useState } from "react";
import LocationQuestion from "./LocationQuestion";
import MultipleChoiceQuestions from "./Questionairre";

type Question = {
  questionText: string;
  options: string[];
};

export const questions: Question[] = [
  {
    questionText: "What level of skier are you?",
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
  {
    questionText: "What is your price range?",
    options: ["$", "$$", "$$$"],
  },
  {
    questionText: "Do you own your own equipment? (Skis, boots, poles, helmet)",
    options: ["Yes", "No"],
  },
  {
    questionText: "Are you looking to go for multiple days?",
    options: ["Yes", "No"],
  },
];

export default function UserQuestions() {
  const [userLocation, setUserLocation] = useState<[number, number]>([
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
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
          console.log(userLocation)
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
    <div className="flex flex-col justify-center items-center w-4/6 m-auto h-5/6">
      {userLocation.every((coord) => coord === Number.NEGATIVE_INFINITY) ? (
        <LocationQuestion getLocation={getLocation} />
      ) : (
        <MultipleChoiceQuestions
          answers={answers}
          setAnswers={setAnswers}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
