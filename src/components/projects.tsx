import ProjectCard from './projectCards';
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="max-[500px]:pl-1rem max-w-70rem max-[500px]:pr-1rem mx-auto">
        <h2 className="text-3xl font-bold mb-8 max-[500px]:ml-1rem">Projects</h2>
        <ProjectCard 
         title="Fundvest"
         description="This is just a web app i built while learning HTML and CSS including React"
         link="https://fundvests.netlify.app/"
        />
         <ProjectCard 
         title="TMDB Movie App"
         description="This is a TMDB movie app that allows you to search for movies, Add them to your favourite list and view details about the movies"
         link="https://hngx-task-two.netlify.app/"
        />
         <ProjectCard 
         title="Go Now"
         description="This was built when i was learning how to build my first web design"
         link="https://g0web.netlify.app/"
        />
         <ProjectCard 
         title="Parchost"
         description="This is a photocopy of the early parchost web app i copied all so as to improve my responsive skills when i was learning"
         link="https://parchost.netlify.app/"
        />
         <ProjectCard 
         title="Image Gallery"
         description="This app Allows users to login with a specific Email and Password, then you get to see the Gallery with a drag'n'drop"
         link="https://hngx-task-three.netlify.app/"
        />
      </div>
    </section>
  );
};


export default Projects;
