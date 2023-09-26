"use client";
import { CourseType } from "@/types";
import React from "react";
import { BsClock } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { BASE_URL } from "@/constant";

const Course = ({ item }: { item: CourseType }) => {
  const deleteCourse = async (id: string, course: string) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/course/${id}`);

      if (data) {
        alert(`${course} deleted successfully.`);
      }
    } catch (err: any) {}
  };

  return (
    <div
      //   key={item.id}
      className="border w-full bg-white mb-4 p-4 space-y-3 sm:space-y-0 sm:flex items-center justify-between rounded-md"
    >
      <div className="flex   space-x-5   md:space-x-16">
        <p className="text-textColor text-sm md:min-w-[200px]">{item.title}</p>
        <p className="text-textColor text-sm md:min-w-[200px]">
          {item.lecturer}
        </p>
      </div>

      <div className="flex space-x-8 items-center">
        <span className="flex space-x-2 text-textColor/50 items-center">
          <BsClock className="text-xs" />
          <p className="text-xs ">{item.course_time}</p>
        </span>
        <span className="flex space-x-3 justify-center">
          <button
            // onClick={() => {
            //   router.push("/admin/support/add_faq");
            //   dispatch(editFaq(item));
            // }}
            className="bg-blue-700 border flex space-x-2 hover:to-blue-500   rounded-md p-1"
          >
            <FiEdit className="text-white" />
          </button>
          <button
            onClick={() => deleteCourse(item.id, item.title)}
            // onClick={() => {
            //   setDeleteModal(true);
            //   setFaq_id(item.id);
            // }}
            className="bg-red-600 border flex space-x-2 hover:to-red-300   rounded-md p-1"
          >
            <RiDeleteBin6Line className="text-white" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Course;
