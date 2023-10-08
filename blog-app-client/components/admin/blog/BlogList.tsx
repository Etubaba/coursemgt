"use client";
import Button from "@/components/common/Button";
import EmptyState from "@/components/common/EmptyState";
import Modal from "@/components/common/Modal";
import SearchInput from "@/components/common/SearchInput";
import { deletePost } from "@/constant/requestManager";
import { BlogType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const BlogList = ({
  blog,
  refetch,
}: {
  blog: BlogType[];
  refetch: () => any;
}) => {
  const [search, setSearch] = useState("");
  const [postId, setPostId] = useState<null | string>(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const { mutate, isLoading } = useMutation(deletePost, {
    onSuccess: () => {
      toast.success("Post deleted successfully.", {
        position: "top-right",
      });
      setDeleteModal(false);
      refetch();
    },
    onError: () => {
      toast.success("An error occur, try again.", {
        position: "top-right",
      });
    },
  });

  return (
    <div>
      <div className="flex mb-6 flex-col md:flex-row justify-between md:items-center">
        <p className="text-textcolor md:mb-0 mb-3  font-semibold">My posts</p>
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
                      className="px-4 py-4 font-medium  whitespace-nowrap "
                    >
                      <img src={item.image} className="w-10 rounded-md h-8 " />
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
                            setPostId(item.id);
                            setDeleteModal(true);
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

      {/* delete modal start here  */}
      <Modal onClose={() => setDeleteModal(false)} open={deleteModal}>
        <div className="w-[16rem] md:w-[24rem]  h-auto">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <MdErrorOutline className="text-red-600 text-5xl" />
            <p className="text-lg font-semibold text-title  mt-2">
              Delete Blog
            </p>
            <p className="text-sm  text-textcolor  mt-2">
              You are about to delete this blog.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setDeleteModal(false)}
              className="bg-white border hover:bg-slate-50 px-2.5 py-1 rounded-md text-sm font-semibold text-textColor "
            >
              Cancel
            </button>
            <div className="max-w-[12rem]">
              <Button
                loading={isLoading}
                onClick={() => mutate(postId as string)}
                text={"Delete"}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BlogList;
