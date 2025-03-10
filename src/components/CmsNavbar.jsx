import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import skyshareApi from "../utilities/skyshareApi";
import Logo from "../../public/images/logo placeholder.png";
import IconButton from "../../public/images/mascot-icons/Logout.png";
import { useNavigate } from "react-router-dom";

function CmsNavbar() {
  const [dataAdmin, setDataAdmin] = useState({});
  useEffect(() => {
    const getDataadmin = async function () {
      try {
        const dataAdminFromServer = await skyshareApi.get("/admin/info");
        setDataAdmin(dataAdminFromServer.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataadmin();
  }, []);

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("authorization");
    delete skyshareApi.defaults.headers.common["authorization"];
  }
  const handleLogout = () => {
    logout();
    navigate("/cms");
  };

  return (
    <div className="bg-neutral-white justify-center items-center flex  py-6">
      <div className=" flex self-stretch items-start w-nav justify-between">
        <div className="">
          <Link to="/">
            <img className="w-44" src={Logo} alt="" />
          </Link>
        </div>
        <div className=" flex gap-2 items-center">
          <div className="">
            <h4 className="headline-4">{dataAdmin.name}</h4>
            <p className="paragraph -mt-1">{dataAdmin.role}</p>
          </div>
          <div className="">
            <button
              onClick={handleLogout}
              className="bg-primary-1 hover:bg-primary-2 py-3 px-3 rounded-xl"
            >
              <img className="w-8" src={IconButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CmsNavbar;
