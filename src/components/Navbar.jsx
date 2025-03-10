import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/images/logo placeholder.png";
import Hamburger from "../../public/images/Hamburger Icon.png";
import XCircle from "../../public/images/mascot-icons/Close Square.svg";
function Navbar() {
  function dropNavbar() {
    const drop = document.querySelector("#drop");
    const icon = document.querySelector("#icon");
    const hamburger = document.querySelector("#hamburger");
    icon.classList.toggle("flex");
    icon.classList.toggle("hidden");
    hamburger.classList.toggle("opacity-0");
    hamburger.classList.toggle("opacity-1");
    drop.classList.toggle("scale-y-0");
    drop.classList.toggle("scale-y-1");
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center bg-slate-600 xs:sticky xs:top-0 z-50">
        <div className="sm:w-10/12 w-10/12 lg:w-nav lg:py-4 sm:px-8 sm:py-12 px-8 py-8 justify-around gap-56 lg:gap-0 shadow-lg bg-neutral-white rounded-full absolute mt-5 flex items-center lg:flex-wrap lg:justify-around z-50">
          <div className=" lg:w-logo-msim w-logo-msim flex lg:-ml-44">
            <Link to="/">
              <img
                className=" absolute lg:ml-0  w-32 lg:-mt-7 -mt-5 sm:w-44 sm:-mt-7 sm:-ml-44 -ml-12"
                src={Logo}
                alt=""
              />
            </Link>
          </div>
          <div className="lg:flex items-center gap-10 -mr-40 md:hidden hidden">
            <Link className="text-slate-500 hover:text-black" to="/aboutus">
              About us
            </Link>
            <div className="flex down  gap-2 Our-program">
              <Link
                className=" text-slate-500 hover:text-black flex gap-2 "
                to="/ourprogram"
              >
                <p>Our Program</p>
                <div className=" arrow duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4997 20.7496L11.4997 3.24987L12.9997 3.24987L12.9997 20.7496L11.4997 20.7496Z"
                      fill="#64748b"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9997 19.9999C12.9997 16.4723 9.89755 13.5898 6.58965 13.5898H5.83965V15.0898H6.58965C9.10123 15.0898 11.4997 17.3325 11.4997 19.9999V20.7499H12.9997V19.9999Z"
                      fill="#64748b"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4997 19.9999C11.4997 16.4723 14.6018 13.5898 17.9097 13.5898H18.6597V15.0898H17.9097C15.3982 15.0898 12.9997 17.3325 12.9997 19.9999V20.7499H11.4997V19.9999Z"
                      fill="#64748b"
                    />
                  </svg>
                </div>
              </Link>
              {/* ini adalah menu dropdown */}
              <div className=" absolute drop bg-neutral-white w-44 z-50">
                <div className=" w-full flex justify-center items-center h-1/5 "></div>
                <div className=" w-full flex -mt-2 justify-center items-center h-14 border-gray-400 border-t">
                  <Link
                    className="text-slate-500 hover:text-black"
                    to="/ourprogram/talent"
                  >
                    <p>Talent Academy</p>
                  </Link>
                </div>
                <div className=" w-full h-14 flex justify-center items-center border-gray-400 border-t">
                  <Link
                    className="text-slate-500 hover:text-black"
                    to="/ourprogram/mentor"
                  >
                    <p>Mentor Academy</p>
                  </Link>
                </div>
                <div className=" w-full flex -mt-1 justify-center items-center h-14 border-gray-400 border-t">
                  <Link
                    className="text-slate-500 hover:text-black"
                    to="/ourprogram/parents"
                  >
                    <p>Parents Academy</p>
                  </Link>
                </div>
              </div>
              {/* end dropdown */}
            </div>

            <Link className="text-slate-500 hover:text-black" to="/article">
              Article
            </Link>
            <Button onClick={() => navigate("/contactus")}>
              <div className="flex gap-2">
                <p className="font-bold text-neutral-white">Contact Us</p>
                <svg
                  className="text-neutral-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <button
            onClick={dropNavbar}
            className="flex justify-around bg-primary-1 px-1 py-1 rounded-md absolute ml-60 sm:-mr-40 hover:bg-primary-2 lg:hidden"
          >
            <img
              id="hamburger"
              className="sm:w-14 w-8 opacity-1"
              src={Hamburger}
              alt=""
            />
            <img
              id="icon"
              className="sm:w-14 w-8 absolute hidden"
              src={XCircle}
              alt=""
            />
          </button>
        </div>
        <div
          id="drop"
          className="block duration-500 origin-top scale-y-0 absolute bg-white mt-16 rounded-lg padding pt-20 items-center gap-10 w-10/12 lg:hidden z-20"
        >
          <div className=" drop-down flex flex-col px-16 -mt-10 gap-4 -ml-10">
            <Link
              className="text-slate-500 hover:text-black flex items-center gap-3"
              to="/aboutus"
            >
              <p className="text-lg lg:text-xl">About Us</p>
            </Link>
            <Link
              className="  text-slate-500 hover:text-black flex items-center gap-3"
              to="/ourprogram"
            >
              <p className="text-lg lg:text-xl">Our Program</p>
            </Link>
            <Link
              className=" text-slate-500 hover:text-black flex items-center gap-3"
              to="/ourprogram/talent"
            >
              <svg
                className=" -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 20.7496L11.4997 3.24987L12.9997 3.24987L12.9997 20.7496L11.4997 20.7496Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9997 19.9999C12.9997 16.4723 9.89755 13.5898 6.58965 13.5898H5.83965V15.0898H6.58965C9.10123 15.0898 11.4997 17.3325 11.4997 19.9999V20.7499H12.9997V19.9999Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 19.9999C11.4997 16.4723 14.6018 13.5898 17.9097 13.5898H18.6597V15.0898H17.9097C15.3982 15.0898 12.9997 17.3325 12.9997 19.9999V20.7499H11.4997V19.9999Z"
                  fill="#64748b"
                />
              </svg>
              <p className="text-lg lg:text-xl">Talent Academy</p>
            </Link>

            <Link
              className=" text-slate-500 hover:text-black flex items-center gap-3"
              to="/ourprogram/mentor"
            >
              <svg
                className=" -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 20.7496L11.4997 3.24987L12.9997 3.24987L12.9997 20.7496L11.4997 20.7496Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9997 19.9999C12.9997 16.4723 9.89755 13.5898 6.58965 13.5898H5.83965V15.0898H6.58965C9.10123 15.0898 11.4997 17.3325 11.4997 19.9999V20.7499H12.9997V19.9999Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 19.9999C11.4997 16.4723 14.6018 13.5898 17.9097 13.5898H18.6597V15.0898H17.9097C15.3982 15.0898 12.9997 17.3325 12.9997 19.9999V20.7499H11.4997V19.9999Z"
                  fill="#64748b"
                />
              </svg>
              <p className="text-lg lg:text-xl">Mentor Academy</p>
            </Link>

            <Link
              className=" text-slate-500 hover:text-black flex items-center gap-3"
              to="/ourprogram/parents"
            >
              <svg
                className=" -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 20.7496L11.4997 3.24987L12.9997 3.24987L12.9997 20.7496L11.4997 20.7496Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9997 19.9999C12.9997 16.4723 9.89755 13.5898 6.58965 13.5898H5.83965V15.0898H6.58965C9.10123 15.0898 11.4997 17.3325 11.4997 19.9999V20.7499H12.9997V19.9999Z"
                  fill="#64748b"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4997 19.9999C11.4997 16.4723 14.6018 13.5898 17.9097 13.5898H18.6597V15.0898H17.9097C15.3982 15.0898 12.9997 17.3325 12.9997 19.9999V20.7499H11.4997V19.9999Z"
                  fill="#64748b"
                />
              </svg>
              <p className="text-lg lg:text-xl">Parents Academy</p>
            </Link>

            <Link className="text-slate-500 hover:text-black" to="/article">
              <p className="text-lg lg:text-xl">Article</p>
            </Link>

            <div className="w-full">
              <Button onClick={() => navigate("/contactus")}>
                <div className="flex gap-2">
                  <p className="font-bold text-neutral-white text-lg">Contact Us</p>
                  <svg
                    className="text-neutral-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
