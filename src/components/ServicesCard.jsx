import React, { useState } from "react";
import ProjectLinks from "./ProjectLinks";
import { AiOutlineLeftCircle } from "react-icons/ai";

const ServicesCard = (props) => {
  const [content, setContent] = useState(false);

  return (
    <div>
      {content ? (
        <div className="transition ease-in duration-100 hover:bg-black justify-content hover:text-white border-2 flex flex-col lg:flex-row p-4 m-4">
          <div>{props.icon}</div>
          <div className={"flex flex-col justify-center gap-5"}>
            <div className="font-bold text-2xl">{props.title}</div>
            <div>{props.description}</div>
            <div className="flex flex-row-reverse">
              <button
                className="transition ease-in duration-100 bg-black text-white hover:bg-white hover:text-black hover:underline p-2 border"
                onClick={() => setContent(!content)}
              >
                See More!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="transition ease-in duration-100 p-4 hover:bg-white hover:text-black bg-black text-white border-2 flex flex-row justify-content m-4 gap-5">
          <button
            className="transition ease-in duration-100 bg-white text-black hover:bg-black hover:text-white p-2 border text-3xl"
            onClick={() => setContent(!content)}
          >
            <AiOutlineLeftCircle />
          </button>
          <div className={"flex flex-col justify-center gap-10"}>
            <div className="font-bold text-2xl">Projects</div>
            <div className="font-semilight text-lg flex flex-col gap-3">
              <ProjectLinks linkName={props.projectOne} />
              <ProjectLinks linkName={props.projectTwo} />
              <ProjectLinks linkName={props.projectThree} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
