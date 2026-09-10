import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Event-Driven Notification System",
      link: "https://github.com/sambit45/notification-service",
      description: `Designed and developed an event-driven notification 
      platform on AWS using Spring Boot, SNS, SQS, Lambda, and DynamoDB
      for high-throughput asynchronous messaging. Implemented SNS fan-out, 
      SQS-based processing, retries, DLQs, and idempotency controls to ensure 
      reliable message delivery and fault tolerance. 
      Automated containerized deployments with Docker and AWS CI/CD; integrated 
      API Gateway, CloudWatch, and Parameter Store for secure operations and observability.`,
    },
    {
      id: 2,
      title: "File Upload Service",
      link: "https://github.com/sambit45/FileUploadService",
      description: `Developed a scalable cloud-native file upload system using Spring Boot,
      Spring Security, JWT, AWS S3, and Docker. Implemented secure
      presigned URL uploads, role-based authentication, and cloud storage
      integration with AWS services for efficient and secure file management.`,
    },

    {
      id: 3,
      title: "Expense Tracker",
      link: "https://github.com/sambit45/Expense_Tracker",
      description: `Built a full-stack expense management application using Spring Boot,
      React, JWT Authentication, and MySQL. Implemented secure user
      authentication, transaction tracking, and responsive dashboards for
      efficient financial management and user experience.`,
    },

    {
      id: 4,
      title: "Project Management",
      link: "https://github.com/sambit45/Project-Management-System/tree/backend/",
      description: `Developed a full-stack project management platform using Spring Boot,
      React, Redux Toolkit, and SQL. Features include issue tracking,
      task assignment, team collaboration, commenting, and real-time
      communication with a clean and responsive UI.`,
    },

    {
      id: 5,
      title: "Organic Store",
      link: "https://github.com/sambit45/organic_store",
      description: `Developed a modern e-commerce application using ReactJS,
      Tailwind CSS, Spring Boot, and SQL. Implemented product
      management, responsive UI, and backend APIs for seamless
      shopping experience and efficient data handling.`,
    },

    {
      id: 6,
      title: "Todo List",
      link: "https://github.com/sambit45/Todo-List-Springboot",
      description: `Built a task management application using Spring Boot
      showcasing backend development concepts including CRUD
      operations, REST APIs, and efficient task organization.`,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-6 text-gray-400">
            Check out some of my recent work and backend-focused projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, link, description }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-700 rounded-xl p-5 flex flex-col justify-between bg-gray-900 hover:scale-105 duration-300"
            >
              <div>
                <h1 className="text-cyan-400 text-xl font-bold">{title}</h1>

                <p className="text-gray-300 text-sm mt-4 leading-6">
                  {description}
                </p>
              </div>

              <div className="flex items-center justify-center mt-6">
                <a
                  href={link}
                  className="text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-sm sm:text-base duration-200"
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
