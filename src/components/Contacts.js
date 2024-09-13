import React from "react";

function Contacts() {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pbnvwzqb"
            method="POST"
            className="flex flex-col w-full md:w-3/4 lg:w-1/2 mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none mb-4"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none mb-4"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
