const NostalgiaSection = () => {
  const memories2018 = [
    "Первые совместные фотографии",
    "Любимые песни того времени",
    "Школьные перемены и секреты",
    "Летние каникулы мечты",
    "Первые 'взрослые' разговоры",
    "Совместные планы на будущее",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-800 text-white relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 font-montserrat">
          Ностальгия 2018 📅
        </h2>
        <p className="text-xl text-center text-purple-200 mb-16 font-open-sans">
          Тот особенный год, когда все только начиналось...
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {memories2018.map((memory, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">💫</div>
              <p className="font-open-sans text-sm leading-relaxed">{memory}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4 font-montserrat text-yellow-300">
            2012-2013 - Год Начала Нашей Истории 🌟
          </h3>
          <p className="text-lg font-open-sans text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Этот год стал особенным не просто так. Мы познакомились,
            подружились, и с тех пор прошло уже столько времени, но воспоминания
            остались такими же яркими. Каждый момент того времени был наполнен
            открытиями и радостью!
          </p>
          <div className="mt-6 text-4xl animate-pulse">💕</div>
        </div>
      </div>
    </section>
  );
};

export default NostalgiaSection;
