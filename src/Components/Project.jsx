import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();

  const Projects = [
    {
      title: "Leveraging Machine Learning for Proactive Detection and Mitigation of Android RAT",
      description:
        "This project employs advanced machine learning techniques to detect and mitigate Android Remote Access Trojans (RATs) by analyzing network traffic for suspicious patterns. It uses ensemble learning and a robust data preprocessing approach to achieve high detection accuracy, ensuring early intervention against security threats.",
      image: "/assets/images/UROP.png",
      endpoint: "/Project1",
    },
    {
      title: "Tender System and Security using Blockchain",
      description:
        "This blockchain-powered system is designed to securely manage tender processes with a focus on transparency and immutability. By leveraging decentralized technology, it enables organizations to manage contracts and bids in a trustless environment, protecting data integrity and preventing tampering.",
      image: "/assets/images/Tender1.jpg",
      endpoint: "/Project2",
    },
    {
      title: "Smart Student Outpass System",
      description:
        "An innovative IoT-enabled system for managing student outpasses, allowing students to request, track, and get approvals for outpasses digitally. This system simplifies administration with real-time tracking, automated notifications, and seamless user experience.",
      image: "/assets/images/SSOS.jpg",
      endpoint: "/Project3",
    },
    {
      title: "Bingo-25",
      description:
        "A digital version of the classic Bingo game with a unique 5x5 grid layout. Bingo-25 offers an engaging and interactive experience for users, allowing single and multiplayer modes, bringing a modern twist to a beloved game.",
      image: "/assets/images/Bingo.png",
      endpoint: "/Project4",
    },
  ];
  
  const navigateTo = (endpoint) => {
    navigate(`.${endpoint}`);
  };

  return (
    <div id="Projects" className="text-white p-10">
      {Projects.map((project, index) => (
        <div key={index} className="mt-10 border-t-2 flex justify-between py-5">
          <div className="flex-1 border-r-2 border-white pr-5">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-lg leading-relaxed">
                {project.description}
              </p>
              <button
                className="mt-4 py-2 px-4 bg-white text-black rounded-lg transition-all duration-300 hoverable"
                onClick={() => navigateTo(project.endpoint)}
              >
                Know More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center p-10">
            <Link to={project.endpoint}>
              <img
                src={project.image}
                alt={project.title}
                className="transition-all duration-500 hover:rounded-[50px] hover:shadow-lg transform hover:scale-105 hoverable"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
