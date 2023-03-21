
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