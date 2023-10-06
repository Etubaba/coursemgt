"use client";
import { AiOutlineLogin } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store";
import Link from "next/link";
import { UserPropType } from "@/types";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  const currentPath = usePathname();

  const user = useAuthStore((state) => state.user) as UserPropType | null;

  const date = new Date();
  const time = date.getHours();
  const greetings =
    time < 12
      ? "Good Morning"
      : time >= 12 && time < 16
      ? "Good Afternoon"
      : "Good Evening";

  if (currentPath === "/auth/login" || currentPath === "/auth/register")
    return null;
  return (
    <div className=" px-8 py-4 z-50 hidden font-sans  md:flex shadow-sm  bg-white sticky top-0 justify-between items-center">
      <Link href={"/"}>
        <h2 className="text-title logo  font-semibold">
          𝕭𝖑𝖔𝖌<b className="text-primary">𝕬𝖕𝖕</b>
        </h2>
      </Link>

      {currentPath.includes("/admin") ? (
        <div className="flex space-x-3 items-center">
          {/* <DarkToggle /> */}
          <div className="flex item-center">
            <p className="text-sm mr-1 text-textcolor ">{greetings},</p>
            <p className="text-sm mr-1 text-textcolor ">{user?.full_name}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <Link href={"/auth/register"}>
            <button className="flex hover:bg-slate-100 flex-row items-center bg-white border border-gray-400 px-2 py-1 space-x-1 text-sm rounded-md">
              <BsPerson />

              <span>Register</span>
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button className="flex hover:bg-primary/50 flex-row items-center bg-primary text-white px-2 py-1 space-x-1 text-sm rounded-md">
              <AiOutlineLogin />

              <span>Login</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
