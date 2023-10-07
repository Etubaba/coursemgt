"use client";

import { InputProps } from "@/types/component";
import React, { useState } from "react";

const Input = ({
  type,
  style,
  value,
  onChange,
  placeholder,
  id,
  func,
}: InputProps) => {
  const [outline, setOutline] = useState(false);
  return (
    <div
      className={`w-full px-2 rounded-md py-1.5 border ${
        outline ? " border-primary " : "border-[#E5E5E4] "
      }   `}
    >
      <input
        id={id}
        className={`placeholder:text-xs ${
          style !== undefined ? style : ""
        }  text-[13px] text-textcolor bg-transparent   w-full outline-none`}
        type={type}
        onBlur={() => {
          setOutline(false);
        }}
        onFocus={() => {
          setOutline(true);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
