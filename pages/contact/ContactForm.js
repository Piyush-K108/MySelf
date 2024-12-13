import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router"; // Import useRouter

function ContactForm() {
  const [state, handleSubmit] = useForm("mvgonnvo");
  const router = useRouter(); // Initialize router

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push("/"); // Redirect to home after 3 seconds
      }, 1000);

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [state.succeeded, router]);

  if (state.succeeded) {
    return <p className="text-accent">Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        className="input"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        className="textarea"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="btn flex rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className="group-hover:-translate-y-[240%] group-hover:opacity-0 transition-all duration-500">
          Let's talk
        </span>
        <BsArrowRight className="group-hover:flex group-hover:flex-col group-hover:justify-center -translate-y-[120%] group-hover:-translate-y-[0%] opacity-0 group-hover:opacity-100 transition-all absolute text-[22px] duration-500" />
      </button>
    </form>
  );
}

export default ContactForm;
