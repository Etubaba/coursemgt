import { ButtonProps } from "@/types/component";
import React from "react";
import Loader from "./Loader";

const Button = ({ text, onClick, loading }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-white flex justify-center items-center px-4 text-[8px] bg-primary md:text-xs py-1.5 md:py-2 border-white border rounded-md"
    >
      {loading ? <Loader /> : <p> {text}</p>}
    </button>
  );
};

export default Button;
