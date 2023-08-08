import React from "react";

const ExperiencCard = (props) => {
  return (
    <div className="flex transition duration-75s ease-in flex-col gap-3 border-2 m-4 p-4 hover:bg-black hover:text-white">
      <div className="font-bold text-2xl">
        <h1>{props.title}</h1>
      </div>
      <div className="font-semibold text-base">
        <h4>{props.company}</h4>
      </div>
      <div className="font-light text-base">
        <h5>{props.time}</h5>
      </div>
      <div className="font-regular text-lg mt-6">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ExperiencCard;
