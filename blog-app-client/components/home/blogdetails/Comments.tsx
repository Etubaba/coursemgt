"use client";

import Button from "@/components/common/Button";
import { createComment } from "@/constant/requestManager";
import { CommentType, IPostComment } from "@/types";
import { CommentCompoType } from "@/types/component";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsDot } from "react-icons/bs";
import { toast } from "react-toastify";

const Comments = ({ commentList, postId, refetch }: CommentCompoType) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostComment>();

  const { mutate, isLoading } = useMutation(createComment, {
    onSuccess: (data) => {
      toast.success("Comment Sent", {
        position: "top-right",
      });
      refetch();
      reset();
    },
    onError: () => {
      toast.error("Something went wrong,please try again", {
        position: "top-right",
      });
    },
  });

  const [outline, setOutline] = useState(false);

  const onSubmit = async (data: IPostComment) => {
    const field = {
      ...data,
      postId,
    };
    mutate(field);
  };

  return (
    <div className=" my-10 w-full">
      <div className="flex  w-full justify-between">
        <p className="text-lg text-title">Leave a comment</p>
        <h2 className="text-title text-lg mb-5">
          Comments({commentList?.length})
        </h2>
      </div>

      {commentList?.map((content, idx) => (
        <div key={idx} className="border px-3 py-2 md:p-5 w-full">
          <div className="flex mb-4 items-center">
            <p className="font-semibold text-title ">{content.author}</p>
            <BsDot className="mt-[2px] text-2xl" />
            <p className=" text-sm font-light text-gray-500">
              {new Date(content.created_at).toDateString()}
            </p>
          </div>

          <p className="text-textcolor">{content.comment}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border p-5 md:p-7 space-y-6 flex flex-col  rounded h-auto w-full">
          <div
            className={`w-full px-2 rounded-md py-1.5 border ${
              outline ? " border-primary " : "border-[#E5E5E4] "
            }   `}
          >
            <input
              id={"author"}
              {...register("author", { required: "This field is requid" })}
              className={`placeholder:text-xs  text-[13px] text-textcolor bg-transparent   w-full outline-none`}
              type={"text"}
              onBlur={() => {
                setOutline(false);
              }}
              onFocus={() => {
                setOutline(true);
              }}
              placeholder={"Full Name"}
            />
            {errors.author !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("comment", { required: "This field is requid" })}
              id="comment"
              className="w-full outline-none border text-textcolor placeholder:text-sm border-[#E5E5E4] focus:border-primary rounded-lg p-3"
              //   value={comment}
              //   onChange={(e) => setComment(e.target.value)}
              placeholder="Place your comment here..."
            ></textarea>
            {errors.comment !== undefined && (
              <p className="text-red-600 text-xs py-2">
                This field is required
              </p>
            )}
          </div>
          <div className="flex justify-end items-end">
            <Button loading={isLoading} text={"Send"} />
          </div>
        </div>
      </form>

      {/* comments  */}
    </div>
  );
};
export default Comments;
