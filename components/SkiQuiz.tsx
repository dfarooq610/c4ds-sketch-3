import { useState } from "react";

type Question = {
    questionText: string;
    options: string[];
}

const questions: Question[] = [
    {
        questionText: "Do you own your own equipment? (Skis, boots, poles, helmet)",
        options: ["Yes", "No"],
    },
    {
        questionText: "What level of skier are you?",
        options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    {
        questionText: "What is your price range?",
        options: ["$", "$$", "$$$"],
    },
    {
        questionText: "Are you looking to go for multiple days?",
        options: ["Yes", "No"],
    }
]

export default function SkiQuiz() {
  const [userLocation, setUserLocation] = useState<[number, number]>([-1, -1]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          alert("Unable to retrieve your location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            
        </main>
    </div>
  );
}
