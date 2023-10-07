"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/constant";
import { BlogResponseType, BlogType } from "@/types";
import SearchInput from "../common/SearchInput";
import EmptyState from "../common/EmptyState";
import BlogItem from "./BlogItem";
import { BsNewspaper } from "react-icons/bs";
import { usePagination } from "@/store";
import Pagination from "../common/Pagination";

const AllBlogs = () => {
  const [search, setSearch] = useState<string>("");
  const page: number = usePagination((state) => state.page);

  const { data, error, isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/blog?page=${page}`);
      return data as BlogResponseType;
    },
  });

  const blogs = data?.data as BlogType[];

  return (
    <div className="my-10 px-4 md:px-20 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between  mb-10 md:items-center">
        <div>
          <p className="text-2xl text-title  font-bold"> Blogs </p>
          <p className="text-textcolor text-sm mt-1 ">
            Stay updated with the latest trend
          </p>
        </div>

        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div>
        {blogs?.length === 0 ? (
          <EmptyState
            Icon={BsNewspaper}
            name={"blogs"}
            title={"No Blog Available"}
          />
        ) : (
          <div className="grid gap-2 lg:gap-3 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {blogs
              ?.filter((blog) => {
                if (search === "") return blog;
                else if (
                  blog.title.toLowerCase().includes(search.toLowerCase())
                )
                  return blog;
              })
              .map((blog: BlogType) => (
                <BlogItem post={blog} />
              ))}
          </div>
        )}
      </div>

      <div className="my-10 w-full ">
        <Pagination totalPage={data?.total_page as number} />
      </div>
    </div>
  );
};

export default AllBlogs;
