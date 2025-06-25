import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Meme {
  id: string;
  image: string;
  caption: string;
  category: "raccoon" | "artist" | "life";
}

const MemeSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "raccoon" | "artist" | "life"
  >("all");

  const memes: Meme[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=400&h=300&fit=crop",
      caption: "Когда тебя спрашивают, откуда у тебя столько мусора 🦝",
      category: "raccoon",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1502780402662-acc01917738e?w=400&h=300&fit=crop",
      caption: "Я на защите диплома vs Я дома 🦝✨",
      category: "raccoon",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      caption: 'Когда сказал что нарисуешь "быстрый скетч" 🎨',
      category: "artist",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
      caption: "Моя палитра vs Палитра в интернете 🎭",
      category: "artist",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      caption: "Понедельник утром be like 😴",
      category: "life",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
      caption: "Когда нашёл идеальную позу для фото 📸",
      category: "life",
    },
  ];

  const filteredMemes =
    activeCategory === "all"
      ? memes
      : memes.filter((meme) => meme.category === activeCategory);

  const categories = [
    { id: "all", label: "Все мемы", emoji: "😂" },
    { id: "raccoon", label: "Еноты", emoji: "🦝" },
    { id: "artist", label: "Творчество", emoji: "🎨" },
    { id: "life", label: "Жизнь", emoji: "😅" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Мемасики для души 😂
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Собрали самые смешные мемы про енотов, творчество и жизнь
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-amber-100"
                }`}
              >
                {category.emoji} {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemes.map((meme) => (
            <Card
              key={meme.id}
              className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={meme.image}
                  alt={meme.caption}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-transparent" />
              </div>
              <div className="p-4 bg-slate-900">
                <p className="text-center font-medium text-sm leading-relaxed text-transparent">
                  {meme.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemeSection;
