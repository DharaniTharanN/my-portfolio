
import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'SQL', level: 80, icon: '🗃️' },
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'HTML5', level: 90, icon: '🌐' },
    { name: 'CSS3', level: 85, icon: '🎨' },
    { name: 'Git', level: 70, icon: '📦' },
    { name: 'GitHub', level: 75, icon: '🔗' },
  ];

  const softSkills = [
    { name: 'Communication', level: 90, icon: '💬' },
    { name: 'Team Management', level: 85, icon: '👥' },
    { name: 'Logical Thinking', level: 88, icon: '🧠' },
    { name: 'Time Management', level: 82, icon: '⏰' },
    { name: 'Problem Solving', level: 87, icon: '🔍' },
    { name: 'Leadership', level: 80, icon: '👑' },
  ];

  const tools = [
    { name: 'Microsoft Office', level: 85, icon: '📊' },
    { name: 'Excel', level: 80, icon: '📈' },
    { name: 'PowerPoint', level: 88, icon: '📽️' },
    { name: 'Word', level: 90, icon: '📝' },
  ];

  const certifications = [
    { name: 'Excel Essential Training', provider: 'Microsoft 365 - LinkedIn Learning', year: '2024' },
    { name: 'Python Essential Training', provider: 'LinkedIn Learning', year: '2024' },
    { name: 'Introduction to Cloud Computing', provider: 'Simplilearn', year: '2024' },
    { name: 'HTML Essential Training', provider: 'LinkedIn Learning', year: '2024' },
  ];

  const renderSkills = (skills: typeof technicalSkills) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
            <span className="text-purple-400 font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'technical', label: 'Technical Skills', icon: '💻' },
              { id: 'soft', label: 'Soft Skills', icon: '🤝' },
              { id: 'tools', label: 'Tools & Platforms', icon: '🛠️' },
              { id: 'certifications', label: 'Certifications', icon: '🏆' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          {activeTab === 'technical' && renderSkills(technicalSkills)}
          {activeTab === 'soft' && renderSkills(softSkills)}
          {activeTab === 'tools' && renderSkills(tools)}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                      <p className="text-purple-400 mb-1">{cert.provider}</p>
                      <p className="text-gray-400 text-sm">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
