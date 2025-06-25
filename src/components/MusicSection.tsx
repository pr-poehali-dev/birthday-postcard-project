import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Song {
  id: string;
  title: string;
  album: string;
  year: string;
  quote: string;
}

const MusicSection = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs: Song[] = [
    {
      id: "1",
      title: "Молодость",
      album: "Молодость",
      year: "2019",
      quote: "Время летит, как всегда незаметно...",
    },
    {
      id: "2",
      title: "Погружение",
      album: "Треугольники",
      year: "2020",
      quote: "В глубине своих мыслей тону...",
    },
    {
      id: "3",
      title: "Весна",
      album: "Остров",
      year: "2021",
      quote: "Снова весна, снова надежды...",
    },
    {
      id: "4",
      title: "Остров",
      album: "Остров",
      year: "2021",
      quote: "На острове воспоминаний...",
    },
    {
      id: "5",
      title: "Треугольники",
      album: "Треугольники",
      year: "2020",
      quote: "Геометрия чувств сложна...",
    },
    {
      id: "6",
      title: "Лето",
      album: "Сборник",
      year: "2022",
      quote: "Лето в сердце навсегда...",
    },
  ];

  const playPause = (song: Song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Пирокинезис 🎵</h2>
          <p className="text-lg text-purple-200 mb-8">
            Музыка, которая касается души и остается в сердце
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {songs.map((song) => (
                <Card
                  key={song.id}
                  className={`p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                    currentSong?.id === song.id
                      ? "ring-2 ring-pink-400 bg-white/20"
                      : ""
                  }`}
                  onClick={() => playPause(song)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {song.title}
                      </h3>
                      <p className="text-purple-200 text-sm">
                        {song.album} • {song.year}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className={`rounded-full w-10 h-10 p-0 ${
                        currentSong?.id === song.id && isPlaying
                          ? "bg-pink-500 hover:bg-pink-600"
                          : "bg-purple-500 hover:bg-purple-600"
                      }`}
                    >
                      <Icon
                        name={
                          currentSong?.id === song.id && isPlaying
                            ? "Pause"
                            : "Play"
                        }
                        size={16}
                      />
                    </Button>
                  </div>
                  <blockquote className="text-purple-100 italic text-sm border-l-2 border-pink-400 pl-3">
                    "{song.quote}"
                  </blockquote>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="Music" className="mr-2" size={20} />
                Сейчас играет
              </h3>

              {currentSong ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Music" size={48} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {currentSong.title}
                    </h4>
                    <p className="text-purple-200 text-sm mb-4">
                      Пирокинезис • {currentSong.album}
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-purple-100 italic text-sm text-center">
                      "{currentSong.quote}"
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="SkipBack" size={16} />
                    </Button>
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-pink-500 hover:bg-pink-600 rounded-full w-12 h-12 p-0"
                    >
                      <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="SkipForward" size={16} />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-purple-200">
                  <Icon
                    name="Music"
                    size={48}
                    className="mx-auto mb-4 opacity-50"
                  />
                  <p>Выберите трек для прослушивания</p>
                </div>
              )}
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 mt-6">
              <h4 className="text-lg font-bold text-white mb-4">О группе 🎤</h4>
              <p className="text-purple-200 text-sm leading-relaxed">
                Пирокинезис — это искренняя музыка о жизни, чувствах и
                переживаниях. Тексты, которые находят отклик в сердце каждого
                слушателя.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
