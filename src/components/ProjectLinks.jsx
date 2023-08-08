import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectLinks = (props) => {
  return (
    <div className="flex justify-center items-baseline gap-4 placeholder:underline">
      <div>
        <AiOutlineArrowRight />
      </div>
      <div>
        <a className="hover:underline cursor-pointer" href={props.link}>
          {props.linkName}
        </a>
      </div>
    </div>
  );
};

export default ProjectLinks;
