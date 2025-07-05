
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Science and Engineering student at Krishnasamy College of Engineering and Technology, 
                currently pursuing my B.E. degree with a strong academic foundation and a passion for technology.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My objective is to get associated with an organization where I can progress dynamically and 
                enhance my skills and knowledge, contributing to the company's growth, welfare, and wellness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2022</div>
                <div className="text-gray-300">Started B.E.</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7.65%</div>
                <div className="text-gray-300">Current CGPA</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Education Journey</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-white">B.E. Computer Science and Engineering</h4>
                  <p className="text-purple-400">Krishnasamy College of Engineering and Technology</p>
                  <p className="text-gray-400">2022 - Present • CGPA: 7.65%</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-white">Higher Secondary Certificate (HSC)</h4>
                  <p className="text-purple-400">Atchaya Mandir Higher Secondary School</p>
                  <p className="text-gray-400">2021 - 2022 • 77.5%</p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-white">Secondary School Leaving Certificate</h4>
                  <p className="text-purple-400">Atchaya Mandir Higher Secondary School</p>
                  <p className="text-gray-400">2019 - 2020 • 86.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
