import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title:"Project Management",
      link:"https://github.com/sambit45/Project-Management-System/tree/backend/"
    },
    {
      id: 2,
      title: "Organic Store",
      link:"https://github.com/sambit45/organic_store"
    },
    {
      id: 3,
      title:"Todo List",
      link:"https://github.com/sambit45/Todo-List-Springboot"
    }
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio{" "}
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,title,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <h1 className="text-green-600">{title}</h1>
                  <a href={link}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
