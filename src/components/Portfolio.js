import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Project Management",
      link: "https://github.com/sambit45/Project-Management-System/tree/backend/",
      description: `Developed a full-stack web application using Spring Boot, React, Redux
        Toolkit, and SQL for managing projects, tracking issues, assigning tasks,
        inviting users via email, and facilitating team communication with
        real-time commenting and chat features, styled with Tailwind CSS and
        ShadcnUI.`,
    },
    {
      id: 2,
      title: "Organic Store",
      link: "https://github.com/sambit45/organic_store",
      description: `Crafted a sophisticated e-commerce website employing ReactJS for
      dynamic front-end interface, TailwindCSS for modern styling, and
      Spring Boot for efficient back-end functionality. Implemented SQL for
      database management, ensuring seamless data handling and
      enhancing user experience.`,
    },
    {
      id: 3,
      title: "Todo List",
      link: "https://github.com/sambit45/Todo-List-Springboot",
      description: `My Todo List project, driven by Spring Boot, offers a streamlined task
      management experience, showcasing my backend development
      expertise for efficient task organization.`,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work below:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, link, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg p-4 flex flex-col justify-between"
            >
              <h1 className="text-green-600 text-xl font-semibold">{title}</h1>
              <p className="text-gray-300 text-sm mt-4">{description}</p>
              <div className="flex items-center justify-center mt-6">
                <a
                  href={link}
                  className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm sm:text-base duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
