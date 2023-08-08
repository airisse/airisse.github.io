import React, { useState } from "react";
import ServicesCard from "../components/ServicesCard";

const Services = (props) => {
  const [state, setState] = useState();
  const toggleHandler = (index) => {
    setState(index);
  };

  return (
    <div id="services" className="p-4 sm:m-8 lg:mx-20 xl:mx-40">
      <div className="">
        <h1 className="font-heading font-light text-7xl">services</h1>
      </div>
      {/*<div className="flex lg:flex-row my-10 p-2 flex-col justify-center items-center lg:gap-20 lg:py-10 gap-10">
        <div className="flex font-normal text-lg flex-col justify-center items-center sm:m-12 gap-5">
          <button
            className={
              state === 1
                ? "bg-black text-white border p-5"
                : "border p-5 hover:bg-black hover:text-white"
            }
            onClick={() => toggleHandler(1)}
          >
            Content Writing
          </button>
          <button
            className={
              state === 2
                ? "bg-black text-white border p-5"
                : "border p-5 hover:bg-black hover:text-white"
            }
            onClick={() => toggleHandler(2)}
          >
            General Virtual Assistant
          </button>
          <button
            className={
              state === 3
                ? "bg-black text-white border p-5"
                : "border p-5 hover:bg-black hover:text-white"
            }
            onClick={() => toggleHandler(3)}
          >
            Executive Assistant
          </button>
        </div>
        <div>
          {state === 1 ? (
            <div className="flex items-center flex-col order-2 gap-5">
              <ProjectLinks linkName="Project  CW 1" />
              <ProjectLinks linkName="Project  CW 2" />
              <ProjectLinks linkName="Project  CW 3" />
            </div>
          ) : state === 2 ? (
            <div className="flex items-center flex-col order-4 gap-5">
              <ProjectLinks linkName="Project GVA 1" />
              <ProjectLinks linkName="Project GVA 2" />
              <ProjectLinks linkName="Project GVA 3" />
            </div>
          ) : state === 3 ? (
            <div className="flex items-center flex-col order-6 gap-5">
              <ProjectLinks linkName="Project EA 1" />
              <ProjectLinks linkName="Project EA 2" />
              <ProjectLinks linkName="Project EA 3" />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>*/}
      <div className="flex flex-col justify-center items-center">
        <div className="mt-5 flex flex-col lg:flex-row justify-center  items-center p-16">
          <ServicesCard
            title="Administrative Works"
            description="Calendar Management, Email Management, File Management, Pitch Deck, Research Assistant"
            projectOne="Sample Excel Project"
            projectTwo="Sample Excel Project"
            projectThree="Sample Excel Project"
          />
          <ServicesCard
            title="Graphic Design"
            description="Infographics, Brochures, Image Editing, Presentations, Flyers
        "
            projectOne="Sample Excel Project"
            projectTwo="Sample Excel Project"
            projectThree="Sample Excel Project"
          />
          <ServicesCard
            title="Customer Support"
            description="Answering inquiries, Dealing with Concerns, Following up on appointments
        "
            projectOne="Sample Excel Project"
            projectTwo="Sample Excel Project"
            projectThree="Sample Excel Project"
          />
          <ServicesCard
            title="Social Media Management"
            description="Content Management, Caption Writing, Graphic Design"
            projectOne="Sample Excel Project"
            projectTwo="Sample Excel Project"
            projectThree="Sample Excel Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
