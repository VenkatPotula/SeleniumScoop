import React from "react";

const Course = () => {
  const courses = [
    {
      heading: "1. Introduction to Automation Testing",
      points: [
        "What is Automation Testing?",
        "Benefits of Selenium",
        "Overview of Java Programming (Basics and OOP Concepts)",
      ],
    },
    {
      heading: "2. Setting Up the Environment",
      points: [
        "Installing Java, Eclipse, and Maven",
        "Setting Up Selenium WebDriver",
        "Configuring Browsers (Chrome, Firefox)",
      ],
    },
    {
      heading: "3. Maven Project Creation and Advantages",
      points: [
        "Creating a Maven Project in Eclipse",
        "Understanding the pom.xml File",
        "Advantages of Using Maven for Selenium Projects",
      ],
    },
    {
      heading: "4. Selenium WebDriver Basics",
      points: [
        "WebDriver Architecture",
        "Launching Browsers and Navigating Web Pages",
        "Working with Locators (ID, Name, Class, XPath, CSS Selectors)",
      ],
    },
    {
      heading: "5. Advanced WebDriver Techniques",
      points: [
        "Handling Alerts, Frames, and Windows",
        "Working with Web Elements (Buttons, Text Fields, Dropdowns)",
        "Synchronization in Selenium (Implicit and Explicit Waits)",
      ],
    },
    {
      heading: "6. TestNG Framework Integration",
      points: [
        "Introduction to TestNG",
        "Writing TestNG Tests and Annotations",
        "TestNG Reports and Parallel Execution",
      ],
    },
    {
      heading: "7. Page Object Model (POM) Framework Design",
      points: [
        "Creating Page Classes and Test Classes",
        "Implementing POM in Selenium Tests",
        "Advantages of POM",
      ],
    },
    {
      heading: "8. Handling Data-Driven Testing",
      points: [
        "Using Excel with Apache POI for Data-Driven Tests",
        "Parameterization with TestNG",
      ],
    },
    {
      heading: "9. Integrating Extent Reports",
      points: [
        "Adding Extent Reports to Your Project",
        "Customizing Report Appearance",
        "Capturing and Including Screenshots in Reports",
      ],
    },
    {
      heading: "10. Core Java Concepts Utilization in Automation",
      points: [
        "Core java basics concepts",
        "How to use Collections in Selenium",
        "How to use javaOOPS concepts in Automation",
      ],
    },
    {
      heading: "11. Continuous Integration with Jenkins",
      points: [
        "Setting Up Jenkins for Selenium Tests",
        "Scheduling and Running Tests in Jenkins",
        "Configuring Jenkins Reports and Notifications",
      ],
    },
    {
      heading: "12. Best Practices and Interview Preparation",
      points: [
        "Selenium Best Practices",
        "Common Interview Questions in both Automation and Java",
        "Tips for Preparing for an Automation Testing Interview",
      ],
    },
  ];

  // Background colors for cards
  const cardColors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-100",
    "bg-pink-100",
    "bg-gray-200",
    "bg-indigo-300",
    "bg-orange-100",
    "bg-gray-100",
    "bg-red-200",
    "bg-cyan-100",
  ];

  // Split courses into columns of 5 rows each
  const columns = [];
  for (let i = 0; i < courses.length; i += 5) {
    columns.push(courses.slice(i, i + 5));
  }

  return (
    <div className="w-full bg-white h-full border-black border">
      <div className="grid grid-cols-1 h-full lg:grid-cols-3 gap-x-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col bg-purple-100 h-full  ">
            {column.map((course, index) => (
              <div key={index} className="rounded-md ">
                <h2 className="text-xl font-semibold px-2 bg-gradient-to-r from-sky-800 to-blue-600 text-gray-300 py-1 font-serif">
                  {course.heading}
                </h2>
                <div
                  className={` px-4  transition-shadow duration-300 flex flex-col justify-between ${
                    cardColors[index % cardColors.length]
                  }`}
                >
                  <ul className="list-disc list-inside text-gray-700">
                    {course.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
