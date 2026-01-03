import { Code2, GitBranch } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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

  const projects = PROJECTS;

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-orbitron font-bold text-center mb-4 text-white cyber-glow">
            PROJECTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative h-80 cursor-pointer block glassmorphism rounded-xl overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  perspective: '1000px',
                }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className="status-active"></div>
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  <div
                    className={`absolute inset-0 glassmorphism rounded-xl p-8 flex flex-col justify-center items-center card-hover`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Code2 className={`text-blue-400 mb-4 floating`} size={64} />
                    <h3 className="text-3xl font-orbitron font-bold text-white mb-2 text-center hologram-flicker">{project.title}</h3>
                    <p className={`text-lg text-blue-400 font-rajdhani text-center`}>{project.subtitle}</p>
                    <div className="flex items-center mt-4 text-gray-400">
                      <GitBranch size={16} className="mr-2" />
                      <span className="text-sm">{project.tech}</span>
                    </div>
                    <div className="loading-bar mt-4"></div>
                  </div>

                  <div
                    className={`absolute inset-0 glassmorphism rounded-xl p-8 flex flex-col justify-center`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <h3 className={`text-2xl font-orbitron font-bold text-blue-400 mb-4`}>{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400">
                        <span className="font-semibold">Tech Stack:</span> {project.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
