import { Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = CERTIFICATIONS;

  return (
    <section id="certifications" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            HALL OF FAME
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 mb-16 font-rajdhani text-lg">Quick Heal Certified Professional</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`digital-badge glassmorphism rounded-xl p-8 transition-all duration-300 group relative overflow-hidden cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full`}></div>
                <div className="flex items-start justify-between mb-6">
                  <Award className={`text-blue-400 group-hover:cyber-glow transition-all duration-300 skill-radar`} size={40} />
                  <div className={`w-4 h-4 rounded-full bg-green-500 pulse-glow glow-wave`}></div>
                </div>
                <h3 className="text-xl font-rajdhani font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className={`text-blue-400 font-semibold text-lg mb-2`}>{cert.issuer}</p>
                <p className="text-gray-400 text-sm">Click to verify</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 to-transparent`}></div>
              </a>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-rajdhani font-bold text-center mb-8 text-gray-400">Additional Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.filter(cert => !cert.featured).map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glassmorphism rounded-lg p-4 hover:scale-105 transition-all duration-300 group cursor-pointer ${cert.issuer === 'TryHackMe' ? 'guardian-badge' : ''}`}
                >
                  <Award className={`text-blue-400 mb-2`} size={24} />
                  <h4 className="text-sm font-rajdhani font-bold text-white mb-1">{cert.name}</h4>
                  <p className={`text-xs text-blue-400`}>{cert.issuer}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
