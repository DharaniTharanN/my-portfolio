
const Languages = () => {
  const languages = [
    {
      name: 'Tamil',
      level: 'Native',
      proficiency: 100,
      flag: '🇮🇳',
      description: 'Mother tongue - Full fluency'
    },
    {
      name: 'English',
      level: 'Fluent',
      proficiency: 90,
      flag: '🇺🇸',
      description: 'Professional working proficiency'
    },
    {
      name: 'Hindi',
      level: 'Conversational',
      proficiency: 65,
      flag: '🇮🇳',
      description: 'Basic conversational skills'
    }
  ];

  return (
    <section id="languages" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">Languages</span> I Speak
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Communication is key to collaboration. Here are the languages I'm comfortable with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div key={language.name} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center">
              <div className="text-6xl mb-4">{language.flag}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{language.name}</h3>
              <div className="mb-4">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  language.level === 'Native' 
                    ? 'bg-green-500/20 text-green-400' 
                    : language.level === 'Fluent'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {language.level}
                </span>
              </div>
              
              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
                <div className="text-purple-400 text-sm mt-2 font-semibold">{language.proficiency}%</div>
              </div>
              
              <p className="text-gray-400 text-sm">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
