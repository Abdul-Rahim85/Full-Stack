const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "History",
    question: "Who discovered America?",
    choices: ["Christopher Columbus", "Isaac Newton", "Albert Einstein"],
    answer: "Christopher Columbus"
  },
  {
    category: "Programming",
    question: "Which language runs in the browser?",
    choices: ["JavaScript", "C#", "Python"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
