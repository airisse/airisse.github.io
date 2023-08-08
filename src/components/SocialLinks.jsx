import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const SocialLinks = (props) => {
  return (
    <div>
      <ul className="flex gap-2 text-3xl">
        <li>
          <a href={props.linkLinkedin}>
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href={props.linkFacebook}>
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a href={props.linkInstagram}>
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href={props.linkGithub}>
            <AiOutlineGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
