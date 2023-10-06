import React, { useEffect } from "react";

//import cursorEffects from "cursor-effects";

import Header from "./Header";

const Hero = () => {
  return (
    <section className="w-full md:h-screen h-[40vh] bg-[url('/herobg.jpeg')]   bg-cover">
      <div className="bg-black/70 w-full h-full">
        <div className="2xl:max-w-7xl 2xl:mx-auto">
          <div className="h-auto 2xl:h-[70vh] w-full  ">
            <div className="w-full h-full md:py-10 px-4 md:px-8 py-4 ">
              <Header />

              <div className=" xl:max-w-6xl 2xl:max-w-7xl mt-10  md:mt-20 text-white tracking-widest  font-bold ">
                <p className="md:text-[2.7rem]  xl:md:text-[3.4rem] 2xl:text-[4rem]">
                  This is the best{" "}
                  <b id="cursor-img" className="text-primary underline ">
                    Course Management
                  </b>{" "}
                  Software, with{" "}
                  <b className="text-primary underline cursor-img">Course</b>
                  <b> scheduling and fix.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
