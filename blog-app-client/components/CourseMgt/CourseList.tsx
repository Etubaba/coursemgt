import { BASE_URL } from "@/constant";
import { getData } from "@/utils/getData";
import React from "react";
import { BsClock } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Course from "./Course";
import { CourseType } from "@/types";

const CourseList = async () => {
  const [allCourses] = await getData([`${BASE_URL}/course`]);

  const courses = allCourses?.data;

  return (
    <div>
      <h1 className="mb-6 font-semibold">Course List</h1>

      <div>
        {courses?.map((each: CourseType, i: number) => (
          <Course key={i} item={each} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
