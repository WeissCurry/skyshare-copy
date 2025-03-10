import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ButtonLink.css";

function ButtonLink({ children, to, caption, backgroundColor, textColor }) {
  return (
    <Link
      to={to}
      className={`btn-link flex p-3 justify-center items-center gap-2 ${backgroundColor} ${textColor}`}
    >
      <p>{caption}</p>
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node, // Accepts any valid React node
};

export default ButtonLink;
