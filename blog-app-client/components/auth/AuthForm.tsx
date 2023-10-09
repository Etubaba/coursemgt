"use client";

import React, { useState } from "react";
import Button from "../common/Button";
import { BASE_URL } from "@/constant";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuthStore } from "@/store";
import BackDrop from "../common/BackDrop";
import { useMutation } from "@tanstack/react-query";
import { LoginInputType, RegisterInputType } from "@/types";
import { handleLogin, handleRegister } from "@/constant/requestManager";
import { setCookie } from "cookies-next";
import Link from "next/link";

const AuthForm = ({ login }: { login: boolean }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //this function handles switch between login and signup

  const toggleAuth = (data: RegisterInputType | LoginInputType) => {
    if (login) return handleLogin(data as LoginInputType);
    return handleRegister(data as RegisterInputType);
  };

  const handleAuth = useAuthStore((state) => state.authenticateUser);

  const { reset, mutate, isLoading } = useMutation(toggleAuth, {
    onSuccess: (data) => {
      if (login) {
        handleAuth(data.user);
        setCookie("_user", "true", {
          maxAge: 60 * 60 * 60 * 7,
        });
        toast.success("Login successful", {
          position: "top-right",
        });
        router.push("/admin");
      } else {
        toast.success("Registration completed", {
          position: "top-right",
        });
        router.push("/auth/login");
      }

      reset();
    },
    onError: () => {
      toast.error("Something went wrong,please try again", {
        position: "top-right",
      });
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div className="bg-white shadow-lg animate__fadeIn animate__animated rounded-md w-full md:w-[500px] p-7">
      <p className="text-center text-lg text-[#1e202a] font-semibold">
        {!login ? "Create An Account" : "Login to your account"}
      </p>
      <p className="text-center text-sm text-[#7c7f8a] mb-5">
        Provide your credentials
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid gap-2 grid-cols-1 w-full mb-4   ">
          {!login && (
            <div className="">
              <label
                htmlFor="full_name"
                className="text-xs text-textColor/70 mb-1.5"
              >
                Full Name
              </label>
              <input
                {...register("full_name", {
                  required: "This field is required",
                })}
                type={"text"}
                className="border w-full p-2 form-control rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-5"
                // placeholder={"First Name"}
              />
              {errors.full_name !== undefined && (
                <p className="text-red-600 text-xs py-2">
                  This field is required
                </p>
              )}
            </div>
          )}

          <div className="">
            <label htmlFor="email" className="text-xs text-textColor/70 mb-1.5">
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: "This field is requid" })}
              type={"email"}
              className="border w-full p-2 form-control rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-5"
            />
            {errors.email !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="text-xs text-textColor/70 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", {
                required: "THis field is required",
              })}
              type={"text"}
              className="border w-full p-2 form-control rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-5"
              // placeholder={"First Name"}
            />
            {errors.password !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            loading={isLoading}
            //   type="submit"
            text={login ? "Login" : "Register"}
          />
        </div>
      </form>

      <span className="flex space-x-1 my-5 text-sm items-center justify-center">
        <p className="text-textcolor">
          {login ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Link href={login ? "/auth/register" : "/auth/login"}>
          <b className="text-primary">{login ? "Sign up" : "Login"}</b>
        </Link>
      </span>
    </div>
  );
};

export default AuthForm;
