import React from "react";

const Navbar = () => {
  return (
    <nav className="scrolled-header sticky top-0 left-0 w-full border-b border-[#4d4e53] shadow-sm text-xl bg-black z-10 mx-auto">
      <div className="px-12 h-24 flex justify-between items-center text-white relative">
        <a href="#" className="md:inline hidden text-gray-400 text-2xl">Web Portfolio</a>
        <a href="#" className="md:hidden text-gray-400">Portfolio</a>
        <div className="flex justify-end space-x-2 text-gray-700 font-semibold">
          <a href="#aboutMe" className="rounded-lg p-4 transform duration-500 hover:font-semibold hover:text-white">About</a>
          <a href="#projects" className="rounded-lg p-4 transform duration-500 hover:font-semibold hover:text-white">Projects</a>
          <a href="#contact" className="rounded-lg p-4 transform duration-500 hover:font-semibold hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
