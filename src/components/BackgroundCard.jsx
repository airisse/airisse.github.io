import React from "react";

const BackgroundCard = (props) => {
  return (
    <div className="flex flex-col gap-2 border-2 m-4 p-4 hover:bg-black hover:text-white">
      <div className="font-bold text-2xl">
        <h1>{props.title}</h1>
      </div>
      <div className="font-semilight text-lg">
        <h4>{props.company}</h4>
      </div>
      <div className="font-light text-md">
        <h5>{props.time}</h5>
      </div>
      <div className="font-regular text-base mt-5">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BackgroundCard;
