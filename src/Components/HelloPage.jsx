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