import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  question: string;
  options: string[];
  points: number[];
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Что мы делаем, когда встречаемся?",
      options: [
        "Сразу идём есть 🍕",
        "Обсуждаем мемы полчаса 😂",
        "Жалуемся на жизнь 😭",
        "Планируем новые приключения ✨",
      ],
      points: [2, 3, 1, 3],
    },
    {
      id: 2,
      question: "Какой у нас общий тип юмора?",
      options: [
        "Чёрный как кофе ☕",
        "Абсурдный и странный 🤪",
        "Мемы и интернет-культура 💻",
        "Саркастичный и умный 🧠",
      ],
      points: [2, 3, 3, 2],
    },
    {
      id: 3,
      question: "Как мы решаем конфликты?",
      options: [
        "Молчим, пока не забудем 😶",
        "Говорим прямо и честно 💬",
        "Шутим, пока не помиримся 😄",
        "Анализируем часами 🤔",
      ],
      points: [1, 3, 3, 2],
    },
    {
      id: 4,
      question: "Наши выходные обычно проходят:",
      options: [
        "За творчеством и искусством 🎨",
        "В интернете и играх 🎮",
        "На прогулках и в кафе ☕",
        "Дома в пижамах 🏠",
      ],
      points: [3, 2, 2, 1],
    },
    {
      id: 5,
      question: "Что нас больше всего связывает?",
      options: [
        "Общие воспоминания 💭",
        "Похожий взгляд на мир 🌍",
        "Взаимная поддержка 🤝",
        "Безумные приключения 🎢",
      ],
      points: [3, 2, 3, 2],
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setScore(score + questions[currentQuestion].points[answerIndex]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResultMessage = (score: number) => {
    if (score >= 13) {
      return {
        title: "Душевные друзья! 💝",
        message:
          "Вы знаете друг друга как себя! Ваша дружба — это настоящий клад.",
        emoji: "🏆",
      };
    } else if (score >= 10) {
      return {
        title: "Отличные друзья! 🌟",
        message: "У вас крепкая дружба с общими интересами и пониманием.",
        emoji: "🎉",
      };
    } else if (score >= 7) {
      return {
        title: "Хорошие приятели! 😊",
        message: "Вы хорошо ладите, но есть ещё что узнать друг о друге.",
        emoji: "👋",
      };
    } else {
      return {
        title: "Знакомые! 🤔",
        message: "Возможно, стоит провести больше времени вместе?",
        emoji: "🌱",
      };
    }
  };

  const result = getResultMessage(score);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Квиз на дружбу 🤝
          </h2>
          <p className="text-lg text-gray-600">
            Проверим, насколько хорошо вы знаете друг друга!
          </p>
        </div>

        {!showResult ? (
          <Card className="p-8 bg-white shadow-xl">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </span>
                <span className="text-sm text-purple-600 font-medium">
                  Очки: {score}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  variant="outline"
                  className="w-full p-4 text-left justify-start hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 hover:scale-105"
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>
        ) : (
          <Card className="p-8 bg-white shadow-xl text-center">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {result.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">{result.message}</p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 mb-6">
              <p className="text-lg font-medium text-gray-800">
                Ваш результат: <span className="text-purple-600">{score}</span>{" "}
                из {questions.length * 3} очков
              </p>
            </div>
            <Button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
            >
              Пройти ещё раз 🔄
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
