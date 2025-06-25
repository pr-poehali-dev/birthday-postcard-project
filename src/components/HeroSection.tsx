import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-300 to-blue-400 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-200 rounded-full animate-ping"></div>
      </div>

      <div
        className={`text-center px-8 max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
          Наши Воспоминания ✨
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-8 font-open-sans">
          История нашей дружбы через годы
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg text-white/80">
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Прогулки
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Школа стихий
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Творчество
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            2018
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
