import React from 'react';

const WebDevSpace: React.FC = () => {
  return (
    <section id="webdev" className="bg-gray-100 py-16">
      <div className=" max-[500px]:pl-1rem max-[500px]:pr-1rem max-w-100rem mx-auto">
        <h2 className="text-3xl font-bold mb-8 max-[500px]:ml-1rem">Web Development Space</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WebDevCard title="Frontend" description="Intermediate in building responsive and user-friendly user interfaces using React and Tailwind CSS." />
          <WebDevCard title="Backend" description="Proficient in server-side development with Node.js and Express.js, creating RESTful APIs and handling database operations." />
        </div>
      </div>
    </section>
  );
};

const WebDevCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WebDevSpace;
