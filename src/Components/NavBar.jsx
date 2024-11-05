  import React from "react";

  function NavBar(props) {
    console.log(props.bgColor);
    return (
      <nav
        className={`${
          props.bgColor === "black" ? "bg-black text-white" : "hidden"
        } w-full fixed z-50`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center p-3 px-5 sm:px-10">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-Oxanium inline-block hoverable">
              JPP
            </h1>
          </div>
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0 text-base sm:text-sm md:text-lg">

            <li
              className={`relative after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                props.bgColor === "black" ? "after:bg-white" : "after:bg-black"
              } hoverable`}
            >
              <a href="#projects" className="block py-1 font-Oxanium">
                Projects
              </a>
            </li>
            <li
              className={`relative after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                props.bgColor === "black" ? "after:bg-white" : "after:bg-black"
              } hoverable`}
            >
              <a href="#resume" className="block py-1 font-Oxanium">
                Resume
              </a>
            </li>
            <li
              className={`relative after:absolute after:h-[1px] after:w-0 after:bottom-[-1px] after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
                props.bgColor === "black" ? "after:bg-white" : "after:bg-black"
              } hoverable`}
            >
              <a href="#academics" className="block py-1 font-Oxanium">
                Academics
              </a>
            </li>
          </ul>
        </div>

        <hr
          className={`${
            props.bgColor === "black" ? "bg-black text-white" : ""
          } h-0.5 dark:bg-black`}
        />
        
      </nav>
    );
  }

  export default NavBar;
