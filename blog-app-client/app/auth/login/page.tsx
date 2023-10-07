import AuthForm from "@/components/auth/AuthForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/bg1.jpg')] px-4 bg-cover  bg-left-top flex justify-center items-center w-full h-screen">
      <AuthForm login />
    </div>
  );
};

export default page;
