
import { useState } from 'react';
import { Code2, Database, Globe, Palette, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-amber-500' },
        { name: 'React', level: 70, color: 'from-cyan-500 to-blue-500' },
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'SQL', level: 80, color: 'from-purple-500 to-indigo-500' },
        { name: 'MySQL', level: 75, color: 'from-blue-500 to-indigo-500' },
        { name: 'MongoDB', level: 65, color: 'from-green-500 to-teal-500' },
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 70, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', level: 75, color: 'from-gray-500 to-slate-500' },
        { name: 'VS Code', level: 85, color: 'from-blue-500 to-cyan-500' },
        { name: 'Figma', level: 60, color: 'from-purple-500 to-pink-500' },
      ]
    },
    office: {
      title: 'Microsoft Office',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Excel', level: 80, color: 'from-green-500 to-emerald-500' },
        { name: 'PowerPoint', level: 88, color: 'from-orange-500 to-red-500' },
        { name: 'Word', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'Office Suite', level: 85, color: 'from-purple-500 to-pink-500' },
      ]
    }
  };

  const softSkills = [
    { name: 'Communication', icon: '💬' },
    { name: 'Team Management', icon: '👥' },
    { name: 'Logical Thinking', icon: '🧠' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Problem Solving', icon: '🔍' },
    { name: 'Leadership', icon: '👑' },
  ];

  const certifications = [
    { name: 'Excel Essential Training', provider: 'Microsoft 365 - LinkedIn Learning', year: '2024' },
    { name: 'Python Essential Training', provider: 'LinkedIn Learning', year: '2024' },
    { name: 'Introduction to Cloud Computing', provider: 'Simplilearn', year: '2024' },
    { name: 'HTML Essential Training', provider: 'LinkedIn Learning', year: '2024' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Technical Skills with Creative Hexagon Design */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient-${index})"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{skill.level}%</span>
                    </div>
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id={`gradient-${index}`}>
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white text-center">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="text-sm font-medium text-white">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-purple-400 mb-1">{cert.provider}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
