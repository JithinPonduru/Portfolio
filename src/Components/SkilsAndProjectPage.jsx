import React from "react";

function SkillsAndProjectPage() {
  return (
    <div className="text-white mt-8">
      <div>
        <h1 className="text-4xl ml-5 mb-3 underline underline-offset-8 decoration-2 hoverable">Projects</h1>
        
      </div>
      <div>
        <h1 className="text-4xl ml-5 mb-3 underline underline-offset-8 decoration-2 hoverable">
          Skills
        </h1>
        <div className="flex flex-wrap space-y-4 sm:space-y-0">
          <ul className="p-5 text-lg w-full sm:w-auto">
            <li>
              <strong>Languages:</strong> Python, C++, Java, JavaScript,
              Solidity, HTML, CSS
            </li>
          </ul>
          <ul className="p-5 text-lg w-full sm:w-auto">
            <li>
              <strong>Frameworks:</strong> React, Node.js, Express, Flask,
              Django, Bootstrap, Tailwind CSS
            </li>
          </ul>
          <ul className="p-5 text-lg w-full sm:w-auto">
            <li>
              <strong>Tools:</strong> Git, Docker, Postman, MongoDB, MySQL,
              Firebase, Heroku, AWS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndProjectPage;
