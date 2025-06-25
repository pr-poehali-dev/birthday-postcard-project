import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Raccoon {
  id: number;
  x: number;
  y: number;
  fed: boolean;
  happy: boolean;
}

const RaccoonGameSection = () => {
  const [raccoons, setRaccoons] = useState<Raccoon[]>([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setGameOver(true);
    }
  }, [gameActive, timeLeft]);

  useEffect(() => {
    if (gameActive) {
      const spawnRaccoon = () => {
        const newRaccoon: Raccoon = {
          id: Date.now(),
          x: Math.random() * 80,
          y: Math.random() * 60,
          fed: false,
          happy: false,
        };
        setRaccoons((prev) => [...prev, newRaccoon]);
      };

      const interval = setInterval(spawnRaccoon, 2000);
      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const startGame = () => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setRaccoons([]);
  };

  const resetGame = () => {
    setGameActive(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setRaccoons([]);
  };

  const feedRaccoon = (id: number) => {
    setRaccoons((prev) =>
      prev.map((raccoon) =>
        raccoon.id === id ? { ...raccoon, fed: true, happy: true } : raccoon,
      ),
    );
    setScore((prev) => prev + 10);

    setTimeout(() => {
      setRaccoons((prev) => prev.filter((raccoon) => raccoon.id !== id));
    }, 1000);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 200) return { text: "Король енотов! 👑", emoji: "🏆" };
    if (score >= 150) return { text: "Енотовод-профи! 🌟", emoji: "⭐" };
    if (score >= 100) return { text: "Друг енотов! 🤝", emoji: "😊" };
    if (score >= 50) return { text: "Начинающий кормилец 🌱", emoji: "👍" };
    return { text: "Попробуй ещё раз! 💪", emoji: "🎯" };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Покорми енотиков! 🦝
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Кликай по енотам, чтобы их покормить. Набери максимум очков за 30
            секунд!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-bold text-gray-800">
                Очки: <span className="text-green-600">{score}</span>
              </div>
              <div className="text-lg font-bold text-gray-800">
                Время: <span className="text-orange-600">{timeLeft}с</span>
              </div>
            </div>

            {!gameActive && !gameOver && (
              <div className="text-center">
                <div className="text-6xl mb-4">🦝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Готов кормить енотов?
                </h3>
                <p className="text-gray-600 mb-6">
                  Кликай по появляющимся енотам, чтобы их покормить!
                </p>
                <Button
                  onClick={startGame}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3"
                >
                  Начать игру! 🎮
                </Button>
              </div>
            )}

            {gameActive && (
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg min-h-96 overflow-hidden">
                {raccoons.map((raccoon) => (
                  <div
                    key={raccoon.id}
                    className={`absolute cursor-pointer transition-all duration-500 ${
                      raccoon.fed ? "scale-125" : "hover:scale-110"
                    }`}
                    style={{
                      left: `${raccoon.x}%`,
                      top: `${raccoon.y}%`,
                      transform: raccoon.fed ? "scale(1.25)" : "scale(1)",
                    }}
                    onClick={() => !raccoon.fed && feedRaccoon(raccoon.id)}
                  >
                    <div className="text-4xl">
                      {raccoon.fed ? (raccoon.happy ? "😋" : "🦝") : "🦝"}
                    </div>
                    {raccoon.fed && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-green-600 font-bold animate-bounce">
                        +10
                      </div>
                    )}
                  </div>
                ))}

                {raccoons.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p className="text-lg">Еноты скоро появятся... 🦝</p>
                  </div>
                )}
              </div>
            )}

            {gameOver && (
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {getScoreMessage(score).emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Игра окончена!
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {getScoreMessage(score).text}
                </p>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-6">
                  <p className="text-xl font-bold text-gray-800">
                    Итоговый счёт:{" "}
                    <span className="text-green-600">{score}</span>
                  </p>
                </div>
                <div className="space-x-4">
                  <Button
                    onClick={startGame}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2"
                  >
                    Играть снова! 🔄
                  </Button>
                  <Button
                    onClick={resetGame}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    Сброс 🎯
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RaccoonGameSection;
