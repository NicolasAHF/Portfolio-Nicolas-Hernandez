import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import ProjectCard from './components/ProjectCard';
import CommandLine from './components/CommandLine';
import TechStack from './components/TechStack';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 overflow-hidden font-mono">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center p-4">
        <div className={`relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <Terminal className="w-16 h-16 mx-auto mb-8 text-green-400" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">
            Nicolas Hernandez
          </h1>
          <div className="mb-8 space-y-2">
            <p className="text-2xl md:text-3xl text-green-400 typewriter">
              Full Stack Developer
            </p>
            <p className="text-xl md:text-2xl text-green-600">
              Test Automation Engineer
            </p>
          </div>
          <CommandLine />
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 glitch-text text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Neural Testing Framework"
              description="AI-powered testing platform with predictive analysis"
              gif="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzY3MjM5OWUzYjQ5Y2YyZDM4ZmM5MjU5ZjM5ZGNmODExYzIzYjk5YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/2IudUHdI075HL02Pkk/giphy.gif"
              tags={['Python', 'TensorFlow', 'Selenium']}
            />
            <ProjectCard 
              title="Quantum Code Analyzer"
              description="Next-gen code analysis with ML-driven insights"
              gif="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTFjYTJlZGQ4YzM4ZmQ2ZDM4ZWJjNzU2ZWZhZjM4ZjM5ZTM1ZjU5YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26tn33aiTi1jkl6H6/giphy.gif"
              tags={['TypeScript', 'Python', 'ML']}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 glitch-text text-center">Tech Stack</h2>
          <div className="flex items-center justify-center gap-4">
            <Cpu className="w-12 h-12 gradient-text" />
          </div>
          <div className="flex items-center justify-center">
            <TechStack />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 glitch-text">Connect</h2>
          <div className="flex justify-center gap-12">
            <a href="https://github.com" className="social-icon-link">
              <Github className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com" className="social-icon-link">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="mailto:contact@nicolashernandez.dev" className="social-icon-link">
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;