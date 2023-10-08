import { PreviewImgType } from "@/types/component";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const PreviewImage = ({ preview, setFile, setPreview }: PreviewImgType) => {
  const handleDeleteImage = () => {
    setPreview(null);
    setFile([]);
  };

  return (
    <div className="w-full flex flex-col justify-start items-start ">
      <div
        onClick={() => handleDeleteImage()}
        className="z-30 w-full  flex justify-end items-end "
      >
        <div className="p-1 bg-gray-200 hover:bg-adminbg/50 rounded-md">
          <AiOutlineClose className="text-[18px] text-red-600   " />
        </div>
      </div>
      <img
        src={preview}
        className="rounded object-contain -mt-3 mb-2 max-w-full h-[110px]"
      />
    </div>
  );
};

export default PreviewImage;
