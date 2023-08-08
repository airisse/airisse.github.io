import React, { useState } from "react";

const SkillCard = (props) => {
  const [content, setContent] = useState();
  return (
    <div className="transition ease-in duration-75 hover:bg-white border-2 hover:text-black flex flex-col min-w-full bg-black gap-3 m-4 p-4 text-white">
      <div className="text-2xl font-bold">{props.skillName}</div>
      <div className="font-light text-base lowercase">{props.more}</div>
    </div>
  );
};

export default SkillCard;
