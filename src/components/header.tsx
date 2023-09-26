import React from 'react';

const Header: React.FC = () => {

  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Hi, I'm Gafar</h1>
        <nav className="mt-4">
          <a href="#skills">Skills</a><br />
          <a href="#webdev">Web Development</a><br />
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
