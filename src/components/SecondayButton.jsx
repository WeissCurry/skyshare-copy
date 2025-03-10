import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SecondaryButton({ children, to, caption }) {
  const handleCick = function () {
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to={to}
      className="py-1 px-2 flex font-normal justify-center items-center sec-btn gap-2"
      onClick={handleCick}
    >
      <p className="btn-txt lg:text-base xs:text-sm text-center">{caption}</p>
      {children}
    </Link>
  );
}

export default SecondaryButton;
