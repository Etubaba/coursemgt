import React from "react";

const Button = ({ text, onClick }: { text: String; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="text-white px-2 text-[8px] md:text-xs md:px-3 py-1.5 md:py-2 border-white border rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
