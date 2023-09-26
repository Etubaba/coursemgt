import Image from "next/image";
import React from "react";
import Button from "./common/Button";

const Header = () => {
  // const openModal = useModalToggle((state) => state.openModal);

  return (
    <div className="sticky flex justify-between bg-transparent items-center ">
      <div className=" text-white flex">
        <p>
          {" "}
          𝕮𝖔𝖚𝖗𝖘𝖊 <b className="text-primary">𝕸𝕲𝕿</b>
        </p>
      </div>

      <Button text={"Contact Us"} />
    </div>
  );
};

export default Header;
