"use client";
import PreviewImage from "@/components/common/PreviewImage";
import Button from "@/components/common/Button";
import Editor from "@/components/common/Editor";
import Input from "@/components/common/Input";
import { urlsToBlob } from "@/utils/urlToBlob";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineRight } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { createPost, updatePost } from "@/constant/requestManager";
import { useAuthStore } from "@/store";

const page = () => {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [content, setContent] = useState(searchParams.get("content") || "");
  const image = searchParams.get("image");
  const [preview, setPreview] = useState<string | null>(image);
  const [fileBlob, setFileBlob] = useState<Blob[]>([]);

  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  // mutation for post creation
  const { mutate, isLoading } = useMutation(createPost, {
    onSuccess: () => {
      toast.success(`Post created successfully`, {
        position: "top-right",
      });
      setContent("");
      setFileBlob([]);
      setPreview(null);
      setTitle("");
    },
    onError: () => {
      toast.error(`Something went wrong, Try again`, {
        position: "top-right",
      });
    },
  });

  // mutation for post  update
  const { mutate: updateMutate, isLoading: updateLoading } = useMutation(
    updatePost,
    {
      onSuccess: () => {
        toast.success(`Post update completed`, {
          position: "top-right",
        });
        router.push("/admin");
      },
      onError: () => {
        toast.error(`Something went wrong, Try again`, {
          position: "top-right",
        });
      },
    }
  );

  //hook to select image using drag and drop
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/svg": [],
    },
    onDrop: (acceptedFiles) => {
      setPreview(URL.createObjectURL(acceptedFiles[0]));
      setFileBlob(acceptedFiles);
    },
  });

  //convert image url to file blob object on edit
  useEffect(() => {
    if (searchParams.get("id") === null) return;
    const setBlob = async () => {
      const blobs = await urlsToBlob(preview as string);
      setFileBlob(blobs);
    };
    setBlob();
  }, [searchParams.get("id")]);

  //checks if user intend to edit image on edit
  const isImageEdited = (): boolean => {
    const imgurl = preview as string;
    if (imgurl.includes("blob")) return true;
    return false;
  };

  const handleCreatePost = () => {
    if (title === "" || content === "" || fileBlob.length === 0)
      return toast.error(`All fields are required`, {
        position: "top-right",
      });

    const userId = user?.id as string;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userId", userId);
    formData.append("image", fileBlob[0]);
    mutate(formData);
  };

  const handleUpdatePost = () => {
    if (title === "" || content === "" || fileBlob.length === 0)
      return toast.error(`All fields are required`, {
        position: "top-right",
      });
    const userId = user?.id as string;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // check if image is edited
    isImageEdited() && formData.append("image", fileBlob[0]);

    const data = {
      formData,
      postId: searchParams.get("id") as string,
    };

    updateMutate(data);
  };

  return (
    <div>
      <span className="text-lg mb-10 flex space-x-2  cursor-pointer font-semibold">
        <Link href={"/admin"}>
          <p
            className={
              "text-gray-500/60  text-xs md:text-base tracking-wide hover:underline"
            }
          >
            Posts
          </p>
        </Link>{" "}
        <span className="flex space-x-2">
          <AiOutlineRight className={`md:mt-1 text-textcolor  text-base`} />
          <p className={`tracking-wide text-xs md:text-base text-textcolor`}>
            {searchParams.get("id") === null ? "Create Post" : "Update Post"}
          </p>
        </span>
      </span>

      <div className="md:mt-10 mt-8 w-full  bg-white border  shadow-sm rounded-md p-3 md:p-6">
        <div className=" bg-adminbg  rounded-md mb-4 md:h-auto p-3 md:p-6">
          <p className="text-sm  text-textcolor mb-7">Enter Blog Contents</p>

          <div className="w-full">
            <div className=" w-full mb-6">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Title"}
              />
            </div>

            {typeof window !== "undefined" && (
              <Editor value={content} onChange={(text) => setContent(text)} />
            )}
          </div>
        </div>
        {preview === null ? (
          <div className=" bg-adminbg  rounded-md mb-4 md:h-auto p-3 md:p-6">
            <div
              {...getRootProps()}
              className="border-dashed w-full h-36 md:max-w-[220px] rounded-md cursor-pointer space-y-4 border-2  flex flex-col border-gray-300 justify-center p-6  items-center hover:border-primary "
            >
              <>
                <input {...getInputProps()} />
                <p>
                  <BsCloudUpload className="text-2xl text-primary" />
                </p>

                <div className="space-y-3 flex flex-col items-center justify-center">
                  <p className=" text-xs text-textcolor  lg:text-sm text-center">
                    Click or drag your photo here{" "}
                  </p>
                </div>
              </>
            </div>
          </div>
        ) : (
          <div className="w-full items-start justify-start flex">
            <PreviewImage
              index={0}
              preview={preview as string}
              file={fileBlob}
              setPreview={setPreview}
              setFile={setFileBlob}
            />
          </div>
        )}
      </div>
      <div className="md:flex mb-12 mt-6 w-full md:justify-end">
        <div>
          <Button
            loading={
              searchParams.get("id") === null ? isLoading : updateLoading
            }
            onClick={
              searchParams.get("id") === null
                ? handleCreatePost
                : handleUpdatePost
            }
            text={searchParams.get("id") === null ? "Create" : "Update"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
