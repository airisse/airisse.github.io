import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = (props) => {
  const [background, setBackground] = useState(false);

  const monitorScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", monitorScroll);
  });

  const [navbarExpand, setNavbarExtend] = useState(false);

  return (
    <div
      className={
        background
          ? "lg:bg-black transition lg:text-white flex justify-between sm:px-10 sm:py-7 lg:fixed lg:top-0 lg:left-0 lg:flex lg:justify-between lg:items-centers lg:w-full"
          : "p-4 flex justify-between sm:px-10 sm:py-7 lg:sticky lg:top-0 lg:left-0 lg:flex lg:justify-between lg:items-centers lg:w-full"
      }
    >
      <div>
        <a className="font-heading text-2xl" href="/">
          {props.logoName}
        </a>
      </div>
      <div>
        <ul
          className={
            "lowercase hidden text-2xl flex flex-col items-center lg:block lg:flex lg:flex-row lg:text-sm lg:font-medium lg:justify-center lg:items-center lg:gap-5"
          }
        >
          <li>
            <a className="hover:underline" href="#hero">
              home
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#services">
              services
            </a>
          </li>
          <li>
            <a
              className="hover:bg-black hover:text-white tansition ease-in duration-100 p-1.5 border"
              href="#contact"
            >
              get in touch
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:hidden sticky right-4">
        <button
          className="hover:bg-black rounded-md hover:text-white text-lg p-2"
          onClick={() => setNavbarExtend(!navbarExpand)}
        >
          <AiOutlineMenu />
        </button>
        {navbarExpand ? (
          <div className="fixed top-0 left-0 bg-black bg-opacity-60 text-white w-full">
            <div className="sm:px-10 sm:py-6 px-4 border-b-2 text-3xl">
              <button onClick={() => setNavbarExtend(!navbarExpand)}>
                <AiOutlineArrowLeft />
              </button>
            </div>
            <ul className="p-10 flex flex-col justify-center items-center text-2xl gap-10">
              <li>
                <a className="" href="#hero">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a className="underline" href="#contact">
                  get in touch
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
