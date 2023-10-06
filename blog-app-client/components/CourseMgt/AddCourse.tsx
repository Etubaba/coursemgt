"use client";
import { BASE_URL } from "@/constant";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Loader from "../common/Loader";
import { useStore } from "@/store";

const AddCourse = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const editValues = useStore((state) => state.editProps);
  const finishEdit = useStore((state) => state.setEditData);
  const {
    reset,
    setValue,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (editValues === null) return;
    setValue("title", editValues?.title);
    setValue("lecturer", editValues?.lecturer);
    setValue("time", editValues?.course_time);
  }, [editValues?.title]);

  const pathName = usePathname();
  const router = useRouter();

  const refreshServer = () => {
    return router.replace(pathName);
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      const formdata = {
        title: values["title"],
        lecturer: values["lecturer"],
        course_time: values["time"],
      };

      const { data } = await axios.post(`${BASE_URL}/course`, formdata);

      if (data) {
        setMsg("Course added successfully");
        reset();
        refreshServer();
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        setMsg(err.response.data.message);
      } else setMsg("Somthing went wrong");
    }
  };

  const updateCourse = async (values: any) => {
    setLoading(true);
    try {
      const formdata = {
        title: values["title"],
        lecturer: values["lecturer"],
        course_time: values["time"],
      };

      const { data } = await axios.put(
        `${BASE_URL}/course/${editValues?.id}`,
        formdata
      );

      if (data) {
        setMsg("Course updated successfully");
        reset();
        refreshServer();
        setLoading(false);
        finishEdit(null);
      }
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        setMsg(err.response.data.message);
      } else setMsg("Somthing went wrong");
    }
  };

  const action = (value: any) => {
    if (editValues === null) onSubmit(value);
    else updateCourse(value);
  };
  return (
    <div className="bg-white shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[25rem] p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
        Create Course
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide details of course
      </p>

      <form onSubmit={handleSubmit(action)}>
        <div className=" grid gap-2 grid-cols-1 w-full mb-4   ">
          <div className="">
            <label htmlFor="title" className="text-xs text-textColor/70 mb-1.5">
              Title
            </label>
            <input
              {...register("title", {
                required: "This field is required",
              })}
              type={"text"}
              className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
              // placeholder={"First Name"}
            />
            {errors.title !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="lecturer"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Lecturer
            </label>
            <input
              id="lecturer"
              {...register("lecturer", { required: "this field is required" })}
              type={"text"}
              className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
              // placeholder={"First Name"}
            />
            {errors.lecturer !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>

          <div className="">
            <label htmlFor="time" className="text-xs text-textColor/70 mb-1.5">
              Time
            </label>
            <input
              id="time"
              {...register("time", {
                required: "THis field is required",
              })}
              type={"text"}
              className="border w-full p-2 form-control rounded-md focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange focus:ring-opacity-5"
              // placeholder={"First Name"}
            />
            {errors.time !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-primary flex justify-center items-center min-w-[90px] rounded-md px-2 py-1 "
        >
          {loading ? (
            <Loader />
          ) : (
            <p> {editValues === null ? "Submit" : "Update"}</p>
          )}
        </button>

        <p
          className={`mt-5 text-xs${
            msg === "Course added successfully" ||
            msg === "Course updated successfully"
              ? "text-green-700"
              : "text-red-700"
          }`}
        >
          {msg}
        </p>
      </form>
    </div>
  );
};

export default AddCourse;
