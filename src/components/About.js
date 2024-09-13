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
          I am a skilled and passionate full-stack developer with a strong focus
          on building dynamic and scalable web applications. My expertise lies
          in leveraging modern technologies like React for front-end development
          and Spring Boot for backend services, along with SQL for efficient
          database management. Over time, I have developed a variety of
          projects, including a robust project management system that allows
          users to manage projects, track issues, and collaborate in real-time
          through chat and comments. Additionally, I have created an e-commerce
          platform with seamless user experience and a streamlined task
          management application, demonstrating my ability to handle both
          complex front-end interactions and backend logic.
        </p>
        <br />

        <p className="text-base sm:text-xl">
          With a keen eye for clean and responsive design, I use tools like
          Tailwind CSS and ShadcnUI to deliver intuitive and visually appealing
          user interfaces. I am also proficient in using Redux Toolkit for
          efficient state management in React applications, ensuring performance
          and scalability. Driven by a problem-solving mindset, I am
          continuously improving my skills in Java, JavaScript, and various web
          technologies to build solutions that meet modern business
          requirements. My focus is on creating high-quality applications that
          deliver value and enhance user experience.
        </p>
      </div>
    </div>
  );
}

export default About;
