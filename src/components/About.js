import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base sm:text-xl mt-10 sm:mt-20">
          I’m a Backend-focused Full Stack Developer with 3+ years of experience
          building scalable web applications and modern backend systems using
          Java, Spring Boot, Microservices, React, SQL, Docker, Kafka, and AWS
          technologies. I enjoy designing clean architectures, developing secure
          REST APIs, and building applications that are scalable, maintainable,
          and production-ready.
        </p>

        <br />

        <p className="text-base sm:text-xl">
          Over time, I’ve built several full-stack and cloud-native projects
          including a Serverless File Upload System, Project Management
          Platform, and Expense Tracker Application. My interests lie in backend
          engineering, distributed systems, cloud technologies, and system
          design. I’m continuously exploring modern development practices and
          improving my understanding of scalable architectures to build
          efficient and impactful software solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
