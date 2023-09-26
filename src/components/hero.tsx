// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20 max-[500px]:py-3rem">
      <div className="container mx-auto text-center">
        <h2 className="max-[500px]:text-pp text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-2xl max-[500px]:mx-auto max-[500px]:max-w-20rem max-[500px]:text-1rem max-w-30rem mx-auto">I am a full-stack web developer with expertise in React, TypeScript, Tailwind CSS, Sass/Scss, Node.js, and Express.js.</p>
      </div>
    </section>
  );
};

export default Hero;
