import React from "react";

function NavBar() {
  return (
    <nav className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center p-3 px-5 sm:px-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold hoverable">
            JPP
          </h1>
        </div>
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0 text-base sm:text-sm md:text-lg">
          <li
            className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 hoverable"
          >
            <a href="#projects" className="block py-1">Projects</a>
          </li>
          <li
            className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 hoverable"
          >
            <a href="#resume" className="block py-1">Resume</a>
          </li>
          <li
            className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 hoverable"
          >
            <a href="#academics" className="block py-1">Academics</a>
          </li>
        </ul>
      </div>
      <hr className="h-0.5 bg-[#6cf4a5] border-0 dark:bg-black" />
    </nav>
  );
}

export default NavBar;
    