import React from "react";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactFormBackend";

const Contact = (props) => {
  return (
    <div id="contact" className="">
      <div className="border-b-2"></div>
      <div className="py-5 sm:m-12 m-4 lg:flex-row lg:justify-evenly flex flex-col justify-center items-center gap-5">
        <div className="my-10 max-w-sm font-heading font-light text-7xl">
          <h1>get in</h1>
          <h1>touch</h1>
        </div>
        <div className="border-b-2"></div>
        {/*<form className="flex p-5 flex-col font-medium gap-5 text-lg">
          <input
            className="focus:outline-none border-b-2 px-2"
            type="text"
            placeholder="name"
            name="name"
            id=""
          />
          <input
            className="focus:outline-none border-b-2 px-2"
            type="email"
            placeholder="email"
            name="email"
            id=""
          />
          <textarea
            className="focus:outline-none border-b-2 px-2"
            type="message"
            placeholder="message"
            name=""
            id=""
          />
          <button
            type="submit"
            className="hover:bg-white hover:text-black hover:border p-4 border bg-black text-white"
          >
            contact me!
          </button>
        </form>*/}
        <ContactForm />
        <div className="font-light py-10 flex flex-col justify-center items-center gap-5">
          <h4 className="font-medium">{props.name}</h4>
          <h4>{props.email}</h4>
          <h4>{props.phone}</h4>
          <h4>{props.city}</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
