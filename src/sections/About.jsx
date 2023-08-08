import React, { useState } from "react";
import image from "../assets/about.png";
import MoreInfo from "../components/MoreInfo";

const About = (props) => {
  const [content, setContent] = useState("skills");

  return (
    <div id="about" className="m-4 flex flex-col">
      <div className="my-4 lg:mx-20 sm:m-8 xl:mx-40">
        <h1 className="font-heading font-light text-7xl">about</h1>
      </div>
      <div className="m-4 my-10 lg:my-0 flex flex-col justify-center items-center gap-8 sm:m-12">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10">
          <div className="p-5 lg:order-2">
            <img src={image} alt="" />
          </div>
          <div className="xl:gap-8 xl:leading-8 lg:order-1 lg:max-w-md font-light text-base flex flex-col gap-3 leading-7">
            <p>{props.paragraphOne}</p>
            <p>{props.paragraphTwo}</p>
            <p>{props.paragraphThree}</p>
          </div>
        </div>
        <div>
          <MoreInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
