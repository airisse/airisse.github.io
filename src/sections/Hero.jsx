import React from "react";
import SocialLinks from "../components/SocialLinks";

const Hero = (props) => {
  return (
    <div
      id="hero"
      className="lg:mx-20 m-4 my-20 flex flex-col gap-5 xl:gap-7 sm:m-12 lg:m-20 xl:mx-40 lg:pb-24"
    >
      <div>
        <h1 className="font-light text-6xl lg:text-7xl">
          I am <span className="font-heading italic">{props.name}</span>,
        </h1>
      </div>
      <div>
        <p className="font-light text-lg sm:leading-7 lg:leading-10 lg:text-2xl lg:max-w-lg sm:max-w-sm leading-9">
          a dedicated
          <span className="font-medium"> {props.skillOne} </span>
          and
          <span className="font-medium"> {props.skillTwo}</span>, ready to
          streamline your task and bring touch of magic to your project
        </p>
      </div>
      <div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero;
