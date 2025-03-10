import React, { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import { Link } from "react-router-dom";
import Edit from "../../public/images/mascot-icons/Edit.png";
import ArrowRight from "../../public/images/mascot-icons/Arrow - Right 3.png";
import IconAddUser from "../../public/images/mascot-icons/Add User.png";

function CmsNavCard() {
  const [dataAdmin, setDataAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataadmin = async () => {
      try {
        const response = await skyshareApi.get("/admin/info");
        setDataAdmin(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getDataadmin();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-4 px-3 w-72 h-auto flex justify-center items-center rounded-xl bg-neutral-white ">
      <ul>
        {dataAdmin && dataAdmin.role !== "admin" && (
          <li className="py-4 w-64 px-4 hover:bg-background rounded-xl">
            <Link className="flex gap-4" to="/cms/kelolaakun">
              <img className="w-6" src={IconAddUser} alt="Kelola Akun" />
              <p className="text-base">Kelola Akun</p>
            </Link>
          </li>
        )}
        <li className="py-4 w-64 px-4 hover:bg-background rounded-xl">
          <Link className="flex gap-4" to="/cms/talentacademy">
            <img className="w-6" src={ArrowRight} alt="Talent Academy" />
            <p className="text-base">Talent Academy</p>
          </Link>
        </li>
        <li className="py-4 w-64 px-4 hover:bg-background rounded-xl">
          <Link className="flex gap-4" to="/cms/mentoracademy">
            <img className="w-6" src={ArrowRight} alt="Mentor Academy" />
            <p className="text-base">Mentor Academy</p>
          </Link>
        </li>
        <li className="py-4 w-64 px-4 hover:bg-background rounded-xl">
          <Link className="flex gap-4" to="/cms/parentsacademy">
            <img className="w-6" src={ArrowRight} alt="Parents Academy" />
            <p className="text-base">Parents Academy</p>
          </Link>
        </li>
        <li className="py-4 w-64 px-4 hover:bg-background rounded-xl">
          <Link className="flex gap-4" to="/cms/article">
            <img className="w-6" src={Edit} alt="Article" />
            <p className="text-base">Article</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CmsNavCard;
