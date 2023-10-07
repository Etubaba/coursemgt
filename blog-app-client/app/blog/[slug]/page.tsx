"use client";
import BlogItem from "@/components/home/BlogItem";
import Divider from "@/components/common/Divider";
import { BASE_URL } from "@/constant";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const page = () => {
  const { slug } = useParams();

  const fetchPostDetails = async () => {
    const { data } = await axios.get(`${BASE_URL}/blog/${slug}`);
    return data;
  };
  const fetchRelated = async () => {
    const { data } = await axios.get(`${BASE_URL}/blog`);
    return data;
  };

  const [postDetails, relatedPost] = useQueries({
    queries: [
      { queryKey: ["post"], queryFn: fetchPostDetails },
      { queryKey: ["relatedPost"], queryFn: fetchRelated },
    ],
  });

  console.log("details", postDetails);
  console.log("related", relatedPost);

  // const [res, relatedRes] = await Promise.all([
  //   fetch(`${BASE_URL}blog/${slug}`),
  //   fetch(`${BASE_URL}blog`),
  // ]);
  // const blogData = await res.json();
  // const relatedData = await relatedRes.json();

  // const related = relatedData.data;
  // const blog = blogData.data;

  return (
    <div>Hello Boss</div>
    // <div className="my-10 px-4 md:px-20">
    //   {" "}
    //   <div className="md:max-w-6xl px-5 md:px-0 mx-auto my-10">
    //     <img
    //       src={blog.image}
    //       alt={blog.title}
    //       className="w-full mb-10 h-[10rem] md:h-[16rem]"
    //     />

    //     <div className="">
    //       <Link href={"/blogs"}>
    //         <button className="md:mb-10 mb-4 flex items-center space-x-1 dark:text-textwhite text-textcolor">
    //           <MdOutlineKeyboardBackspace className="  text-lg" />
    //           <p className="">Back </p>{" "}
    //         </button>
    //       </Link>
    //       <div className="">
    //         <h1 className="md:text-2xl text-xl my-5 dark:text-textwhite font-semibold text-title">
    //           {blog.title}
    //         </h1>

    //         <div className=" flex  mb-6 justify-start items-center">
    //           {blog.content[0] === "<" ? (
    //             <div
    //               dangerouslySetInnerHTML={{
    //                 __html: blog.content,
    //               }}
    //             />
    //           ) : (
    //             <p className="text-textcolor dark:text-textwhite">
    //               {blog.content}
    //             </p>
    //           )}
    //         </div>
    //       </div>{" "}
    //     </div>

    //     <Divider />

    //     <h1 className=" text-xl my-10  dark:text-textwhite text-title">
    //       Related Articles{" "}
    //     </h1>

    //     <div className="grid  mt-5 gap-2 lg:gap-3 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
    //       {related.slice(0, 4).map((blog: any) => (
    //         <BlogItem post={blog} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
