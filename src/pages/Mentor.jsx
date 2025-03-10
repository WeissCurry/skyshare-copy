import React from "react";
// import axios from "axios";
import skyshareApi from "../utilities/skyshareApi";
import { useEffect, useState } from "react";
import MentorCta from "../components/CtaMentor";
import Mentorabout from "../components/AboutMentor";
import BenefitMentor from "../components/BenefitMentor";
import AllActivitiesMentorAcademy from "../components/AllActivitiesMentor";
import TimelineSkyshare from "../components/TimelineSkyshare";
import AlurAcara from "../components/AlurAcara";

function Mentor() {
  const [mentor, setMentor] = useState([]);
  useEffect(() => {
    const getDataMentor = async function () {
      try {
        const response = await skyshareApi.get("/mentor");
        setMentor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataMentor();
  }, []);
  return (
    <>
      <div>
        <MentorCta mentor={mentor} />
        <Mentorabout />
        <BenefitMentor />
        <AlurAcara mentor={mentor} />
        <TimelineSkyshare mentor={mentor}/>
        <AllActivitiesMentorAcademy mentor={mentor} />
      </div>
    </>
  );
}

export default Mentor;
