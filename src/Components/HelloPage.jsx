import React from "react";
import { Animator,MoveIn } from "react-scroll-motion";

function HelloPage(){
    return (
        <div className="bg-white flex flex-col justify-center items-center h-full md:gap-20">
            <span
              style={{
                fontSize: "80px",
                textAlign: "center",
              }}
            >
              <Animator animation={MoveIn(0, 1000)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(0, -1000)}>
              - I'm Jithin Ponduru -
              </Animator>
                Nice to meet you 🙋🏻
            </span>

            <div className="field">
              <div className="mouse"></div>
            </div>
          </div>
    );

}

export default HelloPage;













// import React from "react";
// import { Animator, MoveIn } from "react-scroll-motion";

// function HelloPage() {
//   return (
//     <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 flex flex-col justify-center items-center h-screen text-center relative">
      
//       {/* "I'm Jithin Ponduru" - Left Aligned */}
//       <div className="absolute left-10 top-20 md:top-1/4">
//         <Animator animation={MoveIn(0, 100, 0)}>
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white">
//             I'm <span className="text-yellow-300">Jithin Ponduru</span>
//           </h1>
//         </Animator>
//       </div>

//       {/* "A Full Stack Developer" - Right Aligned */}
//       <div className="absolute right-10 top-40 md:top-2/4">
//         <Animator animation={MoveIn(0, 100, 100)}>
//           <h2 className="text-3xl md:text-5xl font-bold text-white">
//             A Full Stack Developer
//           </h2>
//         </Animator>
//       </div>

//       {/* Optional: Mouse Indicator for animation */}
//       <div className="field mt-40">
//         <div className="mouse"></div>
//       </div>

//       {/* Adding subtle overlay for a stylish effect */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
//     </div>
//   );
// }

// export default HelloPage;
