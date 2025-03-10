import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      className=" text-white lg:text-base xs:text-sm lg:py-4 lg:px-6 xs:px-3 xs:py-3 font-bold flex items-center button"
      onClick={onClick}
    >
      <span className="mr-2">{children}</span>
    </button>
  );
}

export default Button;
