import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  gif: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, gif, tags }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-green-500/30 bg-black/50 hover:border-green-500 transition-colors duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={gif}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-green-400">{title}</h3>
        <p className="text-green-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm border border-green-500/30 rounded-full text-green-400 hover:bg-green-500/10 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;