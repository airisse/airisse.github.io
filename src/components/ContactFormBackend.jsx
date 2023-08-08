import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xknljngo");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <form
      className="flex p-5 flex-col font-medium gap-5 text-lg"
      onSubmit={handleSubmit}
    >
      <input
        className="focus:outline-none border-b-2 px-2"
        id="name"
        type="name"
        name="name"
        placeholder="name"
      />
      <input
        className="focus:outline-none border-b-2 px-2"
        id="email"
        type="email"
        name="email"
        placeholder="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="focus:outline-none border-b-2 px-2"
        id="message"
        name="message"
        placeholder="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="hover:bg-white hover:text-black hover:border p-4 border bg-black text-white"
        type="submit"
        disabled={state.submitting}
      >
        contact me!
      </button>
    </form>
  );
}

export default ContactForm;
