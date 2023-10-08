"use client";

import React, { useState } from "react";
import Toggle from "./MenuToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideNav from "../admin/layout/SideBar";
import { useNavToggle } from "@/store";

const MobileNav = () => {
  const [checked, setChecked] = useState(false);
  const currentPath = usePathname();
  const show = useNavToggle((state) => state.show);

  //   if (currentPath.includes("/admin")) return <AdminHeader />;
  if (currentPath.includes("/auth")) return;

  return (
    <div>
      <div
        className={`lg:hidden relative  bg-white z-[1000]  w-full flex justify-between items-center px-4 pb-4 py-3`}
      >
        <Link href={"/"}>
          <h2 className="text-title  logo  font-semibold">
            𝕭𝖑𝖔𝖌 <b className="text-primary">𝕿𝖗𝖊𝖓𝖉𝖘</b>
          </h2>
        </Link>
        <div className="flex space-x-3 items-center">
          <Toggle yes={checked} setChecked={setChecked} />
        </div>
      </div>
      {checked && !currentPath.includes("/admin") && (
        <div
          className={`w-full absolute ${
            !checked && "opacity-0"
          } px-5 pt-5 top-12 animate__animated animate__fadeInLeft z-50 flex flex-col text-center h-auto justify-center space-y-3 items-start bg-white `}
        >
          <Link href={"/auth/login"}>
            <p
              onClick={() => {
                setChecked(false);
              }}
              className="hover:bg-[#1B242F]/30  text-textcolor  py-1 w-full rounded-md"
            >
              Login
            </p>
          </Link>
          <Link href={"/auth/register"}>
            <p
              onClick={() => {
                setChecked(false);
              }}
              className="hover:bg-[#1B242F]/30 text-textcolor  py-1 w-full rounded-md"
            >
              Register
            </p>
          </Link>
        </div>
      )}

      {checked && currentPath.includes("/admin") && <SideNav show={show} />}
    </div>
  );
};

export default MobileNav;
