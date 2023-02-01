import React from 'react';

export const HeaderIndigo = (props) => {
  return (
    <header className="bg-indigo-500 text-white py-5 px-10">
      <h1 className="text-2xl font-bold text-center">{props.headerText}</h1>
      <nav className="mt-5 text-center">
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600" href="/">{props.nav1}</a>
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600 ml-4" href="/">{props.nav2}</a>
        <a className="inline-block py-2 px-3 text-white hover:bg-indigo-600 ml-4" href="/">{props.nav3}</a>
      </nav>
    </header>
  );
};

export const HeaderTeal = (props) => {
  return (
    <header className="bg-teal-500 text-white py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Component rush</h1>
        <nav className="flex justify-between mt-5">
          <a className="px-3 py-2 font-medium text-white hover:bg-teal-600 transition-all duration-300 ease-in-out" href="/">{props.nav1}</a>
          <a className="px-3 py-2 font-medium text-white hover:bg-teal-600 transition-all duration-300 ease-in-out" href="/">{props.nav2}</a>
          <a className="px-3 py-2 font-medium text-white hover:bg-teal-600 transition-all duration-300 ease-in-out" href="/">{props.nav3}</a>
        </nav>
      </div>
    </header>
  );
};

export const HeaderIndigoAnime = (props) => {
    return (
      <header className="bg-indigo-700 text-white py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Component Rush</h1>
          <nav className="flex justify-between mt-5">
            <a className="px-3 py-2 font-medium text-white hover:bg-indigo-800 transition-all duration-300 ease-in-out" href="/">{props.nav1}</a>
            <a className="px-3 py-2 font-medium text-white hover:bg-indigo-800 transition-all duration-300 ease-in-out" href="/">{props.nav2}</a>
            <a className="px-3 py-2 font-medium text-white hover:bg-indigo-800 transition-all duration-300 ease-in-out" href="/">{props.nav3}</a>
          </nav>
        </div>
      </header>
    );
  };