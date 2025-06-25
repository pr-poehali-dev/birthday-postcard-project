const ElementSchoolSection = () => {
  const elements = [
    { name: "Огонь", emoji: "🔥", color: "from-red-400 to-orange-500" },
    { name: "Вода", emoji: "💧", color: "from-blue-400 to-cyan-500" },
    { name: "Земля", emoji: "🌍", color: "from-green-400 to-emerald-500" },
    { name: "Воздух", emoji: "💨", color: "from-gray-300 to-blue-300" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-4 font-montserrat">
          Школа Стихий ⚡
        </h2>
        <p className="text-xl text-center text-blue-200 mb-16 font-open-sans">
          Помнишь, как мы создавали свой магический мир?
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {elements.map((element, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${element.color} p-8 rounded-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{element.emoji}</div>
                <h3 className="text-2xl font-bold font-montserrat">
                  {element.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat text-yellow-300">
            Наши магические приключения ✨
          </h3>
          <p className="text-lg font-open-sans text-blue-100 leading-relaxed">
            Мы придумывали заклинания, создавали собственные истории про магов и
            волшебников. Каждая игра была как путешествие в другой мир, где мы
            могли быть кем угодно!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElementSchoolSection;
