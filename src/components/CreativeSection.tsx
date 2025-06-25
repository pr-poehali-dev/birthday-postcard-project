const CreativeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 font-montserrat">
          Дом Творчества 🎨
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 font-open-sans">
          Рисование, танцы и бесконечное веселье в твоем доме
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Drawing section */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 font-montserrat">
                Наши Рисунки
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 font-open-sans">
                Помню, как мы сидели за столом, полностью погруженные в
                творчество. Карандаши, фломастеры, краски - все шло в дело!
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 bg-red-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Dancing section */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💃</div>
              <h3 className="text-2xl font-bold text-gray-800 font-montserrat">
                Танцевальные Батлы
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 font-open-sans">
                Включали музыку погромче и танцевали так, как будто весь мир
                смотрит на нас! Каждый танец был уникальным представлением.
              </p>
              <div className="flex justify-center">
                <div className="animate-bounce text-3xl">🎵</div>
                <div className="animate-pulse text-3xl mx-2">🎶</div>
                <div className="animate-bounce text-3xl">🎵</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">
            Атмосфера Твоего Дома
          </h3>
          <p className="text-lg font-open-sans">
            Твой дом всегда был местом, где можно было быть собой на 100%. Там
            мы смеялись, творили и создавали самые яркие воспоминания! 🏠✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
