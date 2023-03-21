import { useRouter } from "next/router";
import { useState } from "react";
import { SkiQuestionairre } from "../../components/quiz/SkiQuestionairre";
import ResortsList from "../../components/results/ResortsList";
import { questions } from "../../services/questions";

export default function Quiz() {
  const [userLocation, setUserLocation] = useState<[number, number]>([
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ]);
  const [answers, setAnswers] = useState<string[]>(questions.map(() => ""));
  const router = useRouter();

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
    router.push({
      pathname: "/results",
      query: {
        latitude: userLocation[0],
        longitude: userLocation[1],
        level: answers[0],
        priceRange: answers[1],
        hasEquipment: answers[2] === "Yes",
        travelPreference: questions[3].options.indexOf(answers[3]),
        isWeekendTrip: answers[4] === "During the weekend",
      },
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <SkiQuestionairre
        userLocation={userLocation}
        getLocation={getLocation}
        answers={answers}
        setAnswers={setAnswers}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
