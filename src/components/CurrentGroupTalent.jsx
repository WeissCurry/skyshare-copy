import React from "react";
import { useEffect, useState } from "react";
import skyshareApi from "../utilities/skyshareApi";
import GroupIcon from "../../public/images/mascot-icons/3 User.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import ArrowDown from "../../public/images/mascot-icons/Arrow - Down 3.png";

const CurrentGroupSkyshare = () => {
  const [groups, setgroups] = useState([]);
  const [dataGroups, setDataGroups] = useState([]);
  const [isDropDown, setIsDropDown] = useState(false);
  useEffect(() => {
    const getGroupSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setgroups(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGroupSchool();
  }, []);

  const getDataGroupByid = async function (id) {
    setIsDropDown(true);
    try {
      const response = await skyshareApi.get(`group/school/${id}`);
      setDataGroups(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenGroups = function (id) {
    if (!isDropDown) {
      setIsDropDown(isDropDown === id ? null : id);
    } else {
      setIsDropDown(false);
    }
  };

  return (
    <>
      <div className="group-section flex px-3 py-14 lg:py-24 lg:px-0 flex-col items-center bg-background">
        <div className="group-container flex flex-col items-center gap-9 lg:gap-10">
          <div className="group-title flex items-center gap-2 lg:gap-4">
            <img className=" size-6 lg:size-10" src={GroupIcon} alt="starts" />
            <h2 className="headline-2">Current Group</h2>
          </div>
          <div className="schoolgroup-card flex items-start gap-9 origin-top lg:flex-row flex-col">
            {groups.map((group) => {
              return (
                <div
                  key={group.id}
                  className="card-size1 pb-10 rounded-xl border-2 mt-4 border-black bg-white"
                >
                  <iframe
                    title="Google Maps"
                    src={group.embed_map}
                    width="290"
                    height="140"
                    // style={{ border: "0" }}
                    style={{
                      borderRadius: "10px 10px 0px 0px",
                      zIndex: "-10",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className=" h-auto border-t-2 -mt-3 relative bg-white border-black rounded-t-xl ">
                    <div className="w-full flex justify-center  ">
                      <div className="w-16 border-2 border-black  rounded-full -mt-8">
                        <img
                          className="w-16 rounded-full"
                          src={group.gambar_logo_sekolah}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" flex justify-center">
                      <div className="w-1/8 px-3 border-b-2 border-black">
                        <h4 className="headline-4 text-center pb-2 ">
                          {group.nama_sekolah}
                        </h4>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className=" w-5/6 mt-4 ">
                        <p className="paragraph text-justify text-slate-500">
                          {group.alamat.substring(0, 80)}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-5 justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          getDataGroupByid(group.id);
                          handleOpenGroups(group.id);
                        }}
                        className="bg-primary-1 z-20 hover:bg-primary-2 px-3 py-2 rounded-full flex"
                        href="#"
                      >
                        <p className="px-2 text-white">Daftar Kelompok</p>
                        <img
                          className={`w-5 ml-2 duration-500 ${
                            isDropDown === group.id ? "-rotate-180" : "rotate-0"
                          }`}
                          src={ArrowDown}
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        className={` -mt-2 duration-500 rounded-lg ${
                          isDropDown === group.id ? "h-44" : "h-0"
                        }`}
                      >
                        <div
                          className={` px-4 mt-4 duration-300 rounded-lg ease-in-out ${
                            isDropDown === group.id ? "opacity-1" : "opacity-0"
                          }`}
                        >
                          {dataGroups && dataGroups.length > 0 ? (
                            dataGroups.map((group) => {
                              return (
                                <div
                                  key={group.id}
                                  className="flex gap-1 w-full"
                                >
                                  <img
                                    className="w-5 h-5 -ml-3"
                                    src={Chain}
                                    alt=""
                                  />
                                  <a
                                    href={group.link}
                                    className={`font-bold text-base  `}
                                  >
                                    {group.name}
                                  </a>
                                </div>
                              );
                            })
                          ) : (
                            <h4 className={`font-bold text-red-500 ml-2 mt-4`}>
                              Tidak Ada Group
                            </h4>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentGroupSkyshare;
