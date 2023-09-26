// Skills.tsx
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white py-16">
      <div className="max-[500px]:pr-1rem max-[500px]:pl-1rem max-w-100rem mx-auto">
        <h2 className="text-3xl font-bold mb-8 max-[500px]:ml-1rem">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-[500px]:gap-2.2">
          <motion.section
            id="skills"
            className='max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard picture="./react.png" title="React" />
          </motion.section>
          <motion.section
            id="skills"
            className="max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative"
            initial={{ x: '-100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard picture="./ts.svg" title="TypeScript" />
          </motion.section>
          <motion.section
            id="skills"
            className="max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }} 
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard picture="./tail.svg" title="Tailwind CSS" />
          </motion.section>
          <motion.section
            id="skills"
            className='max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative'
            initial={{ x: '-100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard picture="./sass.svg" title="Sass/Scss" />
          </motion.section>
          <motion.section
            id="skills"
            className='max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative'
            initial={{ x: '-100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard picture="./node.svg" title="Node.js" />
          </motion.section>

          <motion.section
            id="skills"
            className='max-[500px]:max-h-12rem bg-blue-900 rounded-2xl h-20rem gap-8 text-white flex flex-col z-50 p-5 md:relative'
            initial={{ x: '-100%' }} 
            animate={{ x: 1 }} 
            exit={{ x: '-100%' }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          >
            <SkillCard  picture="./express.svg" title="Express.js" />
          </motion.section>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ title: string; picture: string; }> = ({ title, picture }) => {
  return (
    <div className="bg-gray-100 p-4 h-[100%] rounded-lg shadow-md text-center">
        <img src={picture} className="max-w-10rem w-full mx-auto h-10rem max-[500px]:h-4rem max-[500px]:max-w-5rem"/>
      <h3 className="text-lg font-semibold text-yellow-950">{title}</h3>
    </div>
  );
};

export default Skills;
