import React from "react";

function Skills() {
  return (
    <div className="text-white mt-8 pl-10 p-2">

      <div>
        <h1 className="inline-block text-4xl mb-3 underline underline-offset-8 decoration-2 hoverable">
          Skills
        </h1>

        <div className="p-7 flex flex-wrap gap-6 justify-between bg-black">
          {/* Languages Section */}
          <div className="border text-lg w-full sm:w-[48%] md:w-[30%] rounded-lg shadow-lg bg-gray-800">
            <div className="bg-gray-200 text-black px-5 py-2 rounded-t-lg font-semibold border shadow-md">
              Languages
            </div>
            <div className="flex flex-wrap px-6 py-4 gap-6">
              {/* Skill Item */}
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Python</span>
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>C++</span>
                <a
                  href="https://www.w3schools.com/cpp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    alt="cplusplus"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Java</span>
                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="java"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>JavaScript</span>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Solidity</span>
                <a
                  href="https://soliditylang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"
                    alt="solidity"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>HTML</span>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>CSS</span>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Frameworks Section */}
          <div className="border text-lg w-full sm:w-[48%] md:w-[30%] rounded-lg shadow-lg bg-gray-800">
            <div className="bg-gray-200 text-black px-5 py-2 rounded-t-lg font-semibold border shadow-md">
              Frameworks
            </div>
            <div className="flex flex-wrap px-6 py-4 gap-6">
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>React</span>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Node.js</span>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
                    alt="nodejs"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Django</span>

                <a
                  href="https://www.djangoproject.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-2xl"
                ></a>
                <i className="devicon-django-plain"></i>
              </div>

              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Bootstrap</span>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                    alt="bootstrap"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Tailwind CSS</span>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="tailwind"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="border text-lg w-full sm:w-[48%] md:w-[30%] rounded-lg shadow-lg bg-gray-800">
            <div className="bg-gray-200 text-black px-5 py-2 rounded-t-lg font-semibold border shadow-md">
              Tools
            </div>
            <div className="flex flex-wrap px-6 py-4 gap-6">
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Git</span>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Docker</span>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                    alt="docker"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>Postman</span>
                <a
                  href="https://www.postman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                    alt="Postman"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>MongoDB</span>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="mongodb"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
              <div className="flex items-center border px-3 py-2 rounded-lg space-x-2 bg-gray-900 hoverable">
                <span>MySQL</span>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
