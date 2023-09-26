import React from "react";
import AddCourse from "./AddCourse";
import CourseList from "./CourseList";

const CourseMgt = () => {
  return (
    <div className="w-full py-20 bg-[#fbfbff]">
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="text-center text-2xl md:text-4xl mb-10 font-semibold text-[#101923]">
          Course Management
        </h1>

        <div className="w-full max-w-full  flex lg:flex-row flex-col-reverse px-4 md:px-10 2xl:px-0  space-y-6 md:space-y-0 lg:space-x-10">
          <div className="lg:w-2/3 w-full mt-4 md:mt-0">
            <CourseList />
          </div>
          <div className="lg:w-1/3 w-full relative">
            <AddCourse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMgt;
