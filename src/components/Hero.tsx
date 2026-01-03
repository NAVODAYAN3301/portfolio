import { useState, useEffect } from 'react';
import { Download, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const fullText = 'Securing digital frontiers. One vulnerability at a time.';
  const roleFullText = PERSONAL_INFO.role;
  const skills = ['VAPT', 'Cloud Security', 'CTF', 'Penetration Testing'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= roleFullText.length) {
          setRoleText(roleFullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 80);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const skillTimer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillTimer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="scanline"></div>
      <div className="network-grid"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      
      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="binary-rain matrix-code"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {Array.from({length: 25}, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>
      
      {/* Data Streams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              top: `${20 + i * 30}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-orbitron font-black text-white cyber-glow mb-4 glitch-hover hologram-flicker">
            {PERSONAL_INFO.name}
          </h1>
          <div className="h-16 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Terminal className="text-green-500 mr-3" size={24} />
              <span className="text-green-500 font-mono text-lg">root@security:~$</span>
              <span className="text-gray-400 font-mono text-lg ml-2 terminal-typing">{skills[skillIndex]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-rajdhani font-semibold text-blue-400 min-h-[3rem]">
              {roleText}
              <span className="animate-pulse text-green-500">_</span>
            </h2>
          </div>
          <div className="h-16 mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono min-h-[2rem]">
              {displayText}
              <span className="animate-pulse text-blue-400">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a
              href={PERSONAL_INFO.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="command-button px-8 py-4 text-blue-400 font-rajdhani font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="inline-block mr-2" size={20} />
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="command-button px-8 py-4 text-green-500 font-rajdhani font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="inline-block mr-2" size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
