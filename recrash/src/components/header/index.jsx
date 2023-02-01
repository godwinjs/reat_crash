import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-500 text-white py-5 px-10">
      <h1 className="text-2xl font-bold text-center">Component Rush</h1>
      <nav className="mt-5 text-center">
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600" href="/">Home</a>
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600 ml-4" href="/">About</a>
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600 ml-4" href="/">Contact</a>
      </nav>
    </header>
  );
};

export default Header;