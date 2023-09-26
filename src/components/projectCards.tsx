import React from 'react';

const ProjectCard: React.FC<{ title: string; description: string; link: string; }> = ({ title, description, link }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-1rem">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className='max-w-lg'>{description}</p>
      <a href={link} target='_blank' className="text-blue-500 mt-2 hover:underline">View Project</a>
    </div>
  );
};

export default ProjectCard;
