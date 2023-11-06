"use client";
import React, { useState } from "react";
import SideBarLink from "./SideBarLink";
import { BiLogOut } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";
import { SideBarType } from "@/types/component";

const SideNav = ({ setShow, show }: SideBarType) => {
  const router = useRouter();
  const [currentIndex, setIndex] = useState(0);
  const handleUser = useAuthStore((state) => state.authenticateUser);
  const logout = () => {
    handleUser(null);
    localStorage.removeItem("_user");
    router.push("/auth/login");
  };

  const sideNavList = [
    {
      id: 1,
      iconName: <TbLayoutDashboard />,
      text: "Account",
      href: "/admin",
    },
    {
      id: 2,
      iconName: <BsNewspaper />,
      text: "Create Post",
      href: "/admin/create_blog",
    },
  ];

  if (show !== undefined && show === false) return null;
  return (
    <div className="py-4 pl-4 bg-white transition  pr-4 relative md:static">
      <div className="h-screen  ">
        {sideNavList.map((sideNav, index) => (
          <SideBarLink
            iconName={sideNav.iconName}
            text={sideNav.text}
            href={`${sideNav.href}`}
            setIndex={setIndex}
            index={index}
            key={sideNav.id}
          />
        ))}

        <div className="w-[95%] flex mt-16 md:mt-60 border-t  pt-4">
          <div
            onClick={logout}
            className="  cursor-pointer text-red-600 hover:text-red-700 mb-3 items-center  flex space-x-1 "
          >
            <BiLogOut className=" text-lg  " />
            <p className="">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
