"use client";
import BackDrop from "@/components/common/BackDrop";
import { BASE_URL } from "@/constant";
import { BlogResponseType, BlogType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const page = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["userblog"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/blog?page=${page}`);
      return data as BlogResponseType;
    },
  });

  const blogs = data?.data as BlogType[];

  if (isLoading) return <BackDrop />;

  return <div>page</div>;
};

export default page;
