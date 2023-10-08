"use client";
import BlogList from "@/components/admin/blog/BlogList";
import BackDrop from "@/components/common/BackDrop";
import Button from "@/components/common/Button";
import { BASE_URL } from "@/constant";
import { useAuthStore } from "@/store";
import { BlogResponseType, BlogType, UserPropType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = useAuthStore((state) => state.user) as UserPropType;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["userblog"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/user/post/${user?.id}`);
      return data as { data: BlogType[]; statusCode: number };
    },
  });

  const blogs = data?.data as BlogType[];

  if (isLoading) return <BackDrop />;

  return (
    <div>
      {" "}
      <div className="flex md:flex-row mb-10  md:space-y-0 justify-between items-center">
        <p className="text-lg text-title   tracking-wide font-semibold">
          Blogs
        </p>
        <Link href={"/admin/create_blog"}>
          {" "}
          <Button text="Create Blog" />
        </Link>
      </div>
      <BlogList refetch={refetch} blog={blogs} />
    </div>
  );
};

export default page;
