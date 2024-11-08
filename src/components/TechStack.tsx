import React from 'react';
import { Cpu } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', skills: ['Node.js', 'Python', 'Java', 'PostgreSQL'] },
    { category: 'Testing', skills: ['Jest', 'Cypress', 'Selenium', 'PyTest'] },
    { category: 'DevOps', skills: ['Docker', 'Jenkins', 'AWS', 'GitHub Actions'] },
  ];

  return (
    <section className="py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map(({ category, skills }, index) => (
            <div 
              key={category} 
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 text-center"
              style={{ transform: `rotate(${index % 2 ? 1 : -1}deg)` }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category}</h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="glass-card px-4 py-3 rounded-xl text-gray-300 hover:scale-105 transition-transform cursor-default text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
