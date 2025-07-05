
import { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Computer Science Student & Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'Dharani_Tharan_Resume.pdf';
    link.click();
  };

  const handleResumeView = () => {
    // Replace with your actual resume file path or Google Drive link
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left">
          <div className="animate-fade-in">
            <p className="text-lg text-purple-400 mb-4 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dharani <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tharan</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              I'm Dharani Tharan N, a dedicated B.E. Computer Science and Engineering student at Krishnasamy College of Engineering and Technology. I'm passionate about creating innovative solutions and enhancing my skills through dynamic learning and collaboration in the ever-evolving field of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Me
              </button>
              <div className="flex gap-3">
                <button
                  onClick={handleResumeDownload}
                  className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </button>
                <button
                  onClick={handleResumeView}
                  className="px-6 py-3 border-2 border-pink-400 text-pink-400 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <Eye size={18} />
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60 animate-pulse delay-100"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-purple-400 cursor-pointer" 
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default Hero;
