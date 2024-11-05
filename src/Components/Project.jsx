import React from "react";
import "../assets/CSS/Project.css";
function Project() {
  return (
    <div className="text-white p-10">
        <h1 className="inline-block text-4xl mb-2 underline underline-offset-8 decoration-2 hoverable">
        Project
        </h1>
      <div className="container">
        <ul id="cards">
          <li className="card" id="card1">
            <div className="card-body">
              <h2>Card 1</h2>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card-body">
              <h2>Card 2</h2>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card-body">
              <h2>Card 3</h2>
            </div>
          </li>
          <li className="card" id="card4">
            <div className="card-body">
              <h2>Card 4</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
