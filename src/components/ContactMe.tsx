import React, { Fragment, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ENDPOINT
  );

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="container mx-auto px-4" style={{ height: "80vh" }}>
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <p className="text-center">
        Please feel free to reach out to me for any reason!
      </p>
      <div className="flex items-center justify-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-md p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              id="name"
              type="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            onClick={openModal}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
