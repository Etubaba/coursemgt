"use client";
import { usePagination } from "@/store";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({
  totalPage,
  refetch,
}: {
  totalPage: number;
  refetch: () => any;
}) => {
  const currentPage = usePagination((state) => state.page);
  const setPage = usePagination((state) => state.setPage);
  const pageNumber = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  const prev = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
      refetch();
    }
    return;
  };
  const next = () => {
    if (currentPage < totalPage) {
      setPage(currentPage + 1);

      refetch();
    }
    return;
  };
  return (
    <div className="flex md:flex-row flex-col items-center justify-center  md:justify-between">
      <p className="md:text-sm text-xs mb-4 md:mb-0 font-[400] text-textColor">
        Total Page : {totalPage}
      </p>
      <div className="flex space-x-3 justify-center items-center">
        <BsArrowLeft
          onClick={prev}
          className="text-primary cursor-pointer text-lg"
        />
        {pageNumber.map((element, index) => (
          <span key={index} className="flex">
            <p
              className={`text-sm font-[400] ${
                currentPage === element ? "text-primary" : "text-textcolor"
              } `}
            >
              {element}
            </p>
          </span>
        ))}
        <div
          onClick={next}
          className="bg-primary cursor-pointer hover:bg-primary/70 rounded-full shadow-md p-2 "
        >
          <BsArrowRight className="text-white text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
