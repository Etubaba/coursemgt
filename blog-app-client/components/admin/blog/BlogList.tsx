"use client";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";

import SearchInput from "@/components/common/SearchInput";
import { BASE_URL } from "@/constant";

import { BlogType } from "@/types";

import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const BlogList = ({ blog }: { blog: BlogType[] }) => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const path = usePathname();

  //   const blogDelete = async () => {
  //     setLoading(true);
  //     try {
  //       const token = getCookie("_er3434");
  //       axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  //       axios.defaults.headers.get["Content-Type"] = "application/json";

  //       const { data } = await axios.delete(`${BASE_URL}blog/delete/${blogId}`);
  //       if (data) {
  //         refreshServer();
  //         setDeleteModal(false);
  //         setSuccessModal(true);
  //         setLoading(false);
  //       }
  //     } catch (err: any) {
  //       setLoading(false);

  //     }
  //   };

  return (
    <div>
      <div className="flex mb-6 flex-col md:flex-row justify-between md:items-center">
        <p className="text-textcolor md:mb-0 mb-3  font-semibold">All Blogs</p>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      {/* table starts here */}

      {blog.length === 0 ? (
        <EmptyState
          name={"blog"}
          title={"No Blog Details"}
          Icon={BsNewspaper}
        />
      ) : (
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {["Image", "Title", "View", "Date", "Actions"].map(
                  (item, idx) => (
                    <th key={idx} scope="col" className="px-6 py-3">
                      {item}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {blog
                .filter((item) => {
                  if (search === "") return item;
                  else if (
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                    return item;
                })
                .map((item: BlogType, idx: number) => (
                  <tr key={idx} className="bg-white cursor-pointer border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      <img src={item.image} className="w-8 rounded-md h-10 " />
                    </th>
                    <td className="px-6 py-4">{item.title}</td>

                    <td className="px-6 py-4">
                      <Link
                        className="underline"
                        href={"/blog/" + item.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      {new Date(item.created_at).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td align="left">
                      <span className="flex ml-3 space-x-3 justify-start">
                        <Link
                          href={{
                            pathname: `/admin/create_blog`,
                            query: item,
                          }}
                        >
                          <button className="bg-blue-700 border flex space-x-2 hover:bg-blue-700/40   rounded-md p-1">
                            <CiEdit className="text-white" />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            // setblogId(item.id);
                            // setDeleteModal(true);
                          }}
                          className="bg-red-700 border flex space-x-2 hover:bg-red-700/40   rounded-md p-1"
                        >
                          <RiDeleteBin6Line className="text-white" />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BlogList;
