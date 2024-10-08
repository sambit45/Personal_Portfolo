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

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-600" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-600" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-400" },
    { id: 4, src: reactImage, title: "React", style: "shadow-cyan-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-500" },
    { id: 7, src: springboot, title: "Spring Boot", style: "shadow-green-500" },
    { id: 8, src: redux, title: "Redux-Toolkit", style: "shadow-purple-500" },
    { id: 9, src: java, title: "Java", style: "shadow-red-500" },
    { id: 10, src: sql, title: "SQL", style: "shadow-blue-400" },
    { id: 11, src: cpp, title: "C++", style: "shadow-blue-600" },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 h-20 mx-auto" />
              <p className="mt-4 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
