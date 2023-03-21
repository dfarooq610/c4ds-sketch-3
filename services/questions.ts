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
    questionText: "How much is distance a factor for your ski trip?",
    options: [
      "I would like to travel minimally",
      "I would not mind travelling a bit",
      "I would walk 500 miles and I would walk 500 more",
    ],
  },
  {
    questionText: "What days of the week would you want to go skiing?",
    options: ["During the week", "During the weekend"],
  },
];
