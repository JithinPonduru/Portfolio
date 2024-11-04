import React from "react";

function AfterName() {
  return (
    <div className="text-white p-10">
      <div>
        <h1 className="text-4xl mb-2 underline underline-offset-8 decoration-2 hoverable">
          About Jithin
        </h1>
        <div className="flex mt-5">
          <p className="p-10 text-lg">
            👋 Hi, I'm Ponduru Jithin! I'm a versatile software developer with a
            passion for building innovative solutions across various domains,
            including full-stack web development, blockchain, and machine
            learning.
          </p>
          <p className="p-10 text-lg">
            My projects range from collaborative MERN applications to real-time
            systems and smart contract-based solutions, showcasing my commitment
            to scalability, security, and user-centered design. Always eager to
            learn, I strive to leverage my skills to solve complex challenges
            and make an impact.
          </p>
        </div>
      </div>

      {/* Table for Educational Details */}
      <div className="mt-8">
        <h2 className="text-3xl mb-5 underline underline-offset-8 decoration-2">
          Education
        </h2>
        <table className="w-full border-collapse border border-gray-500 text-left">
          <thead>
            <tr className="bg-white text-black">
              <th className="border border-gray-500 p-3">Degree</th>
              <th className="border border-gray-500 p-3">Institution</th>
              <th className="border border-gray-500 p-3">Year</th>
              <th className="border border-gray-500 p-3">Achievements</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-500 hover:bg-gray-100 hover:text-black">
              <td className="border border-gray-500  p-3">
                Bachelor of Technology (B.Tech)
              </td>
              <td className="border border-gray-500  p-3">
                SRM University, AP
              </td>
              <td className="border border-gray-500  p-3">2021 - 2025</td>
              <td className="border border-gray-500  p-3">CGPA : 8.38</td>
            </tr>
            <tr className="border-b border-gray-500 hover:bg-gray-100 hover:text-black">
              <td className="border border-gray-500  p-3">Intermediate</td>
              <td className="border border-gray-500  p-3">
                Narayana Junior College
              </td>
              <td className="border border-gray-500  p-3">2019 - 2021</td>
              <td className="border border-gray-500  p-3">
                92.8% in board exams
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AfterName;
