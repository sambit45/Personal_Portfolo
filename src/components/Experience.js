import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import springboot from "../assets/springboot.png";
import redux from "../assets/redux.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import cpp from "../assets/c++.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import kafka from "../assets/kafka.png";
import linux from "../assets/linux.png";
import postman from "../assets/postman.png";

const Experience = () => {
  const techs = [
    { id: 1, src: java, title: "Java", style: "shadow-red-500" },

    {
      id: 2,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },

    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },

    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },

    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: redux,
      title: "Redux Toolkit",
      style: "shadow-purple-500",
    },

    {
      id: 7,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },

    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },

    {
      id: 10,
      src: aws,
      title: "AWS",
      style: "shadow-yellow-500",
    },

    {
      id: 11,
      src: kafka,
      title: "Kafka",
      style: "shadow-white",
    },

    {
      id: 12,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-600",
    },

    {
      id: 13,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },

    {
      id: 14,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },

    {
      id: 15,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },

    {
      id: 16,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies & Tools
          </p>

          <p className="py-6 text-gray-400">
            Technologies and tools I use to build scalable backend systems
            and modern web applications.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 h-20 mx-auto object-contain"
              />

              <p className="mt-4 text-sm sm:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;