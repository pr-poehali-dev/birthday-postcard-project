interface MemoryCardProps {
  title: string;
  description: string;
  emoji: string;
  color: string;
  delay?: number;
}

const MemoryCard = ({
  title,
  description,
  emoji,
  color,
  delay = 0,
}: MemoryCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`text-6xl mb-4 ${color}`}>{emoji}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 font-montserrat">
        {title}
      </h3>
      <p className="text-gray-600 font-open-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default MemoryCard;
