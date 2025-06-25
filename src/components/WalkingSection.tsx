import MemoryCard from "./MemoryCard";

const WalkingSection = () => {
  const walkingMemories = [
    {
      title: "Прогулки в парке",
      description:
        "Как мы часто гуляли, рассказывая друг другу истории и смеясь над всякими глупостями. Каждая прогулка была маленьким приключением.",
      emoji: "🌳",
      color: "text-green-500",
    },
    {
      title: "Летние вечера",
      description:
        "Долгие разговоры на улице, когда солнце садилось, а мы не хотели расходиться домой. Эти моменты казались вечностью.",
      emoji: "🌅",
      color: "text-orange-500",
    },
    {
      title: "Дождливые дни",
      description:
        "Даже в дождь мы находили способ веселиться - прыгали по лужам и прятались под зонтиками, продолжая болтать.",
      emoji: "☔",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 font-montserrat">
          Наши Прогулки 🚶‍♀️
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 font-open-sans">
          Сколько километров мы прошли вместе, сколько историй рассказали...
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {walkingMemories.map((memory, index) => (
            <MemoryCard key={index} {...memory} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalkingSection;
