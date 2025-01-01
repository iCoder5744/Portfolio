import React from "react";

const About = ({ theme }) => {
  const isLightTheme = theme === "light";

  return (
    <section
      className={`about-section rounded-b-[50px] mb-2 lg:mb-0 p-3  sm:p-6 lg:flex lg:space-x-8 ${
        isLightTheme ? "bg-gray-800 text-white" : "bg-white text-gray-700"
      }`}
    >
      {/* About Me Section */}
      <div className="about-me w-full lg:w-1/2 space-y-2">
        <h2 className="about-title text-3xl sm:text-4xl font-bold">
          Hello, I'm <br />
          <span className="about-highlight text-green-400">Shivam Yadav!</span>
        </h2>
        <p
          className={`about-description text-justify text-sm sm:text-base sm:leading-relaxed ${
            isLightTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          I’m a passionate web developer currently pursuing a Bachelor of
          Computer Applications (BCA) at City Academy Degree College, Lucknow.
          As a first-year student, I’ve built a strong foundation in modern web
          development technologies and am focused on creating intuitive,
          responsive, and stylish user interfaces.
        </p>
        <ul
          className={`about-list text-justify text-sm sm:text-base list-disc list-inside ${
            isLightTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <li>I'm currently learning full-stack development</li>
          <li>Continuously exploring new technologies to expand my skills.</li>
        </ul>
        <p
          className={`about-aspiration text-justify text-sm sm:text-base sm:mt-4 ${
            isLightTheme ? "text-gray-300" : "text-gray-800"
          }`}
        >
          I aspire to excel in both frontend and backend development and make a
          meaningful impact in the tech industry while learning and growing
          every step of the way.
        </p>
      </div>

      {/* Skills Section */}
      <div
        className={`skills-section w-full lg:w-1/2 mt-4 border p-2 rounded-xl ${
          isLightTheme ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-white"
        }`}
      >
        <h3 className="skills-title text-3xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">
          My Skills
        </h3>
        <div className="skills-container py-6  flex flex-wrap gap-4 justify-around lg:justify-center lg:gap-y-12">
          {/* Skill Badges */}
          <SkillBadge skill="HTML" color="bg-green-500" />
          <SkillBadge skill="CSS" color="bg-blue-500" />
          <SkillBadge skill="Tailwind CSS" color="bg-blue-500" />
          <SkillBadge skill="JavaScript" color="bg-yellow-500" />
          <SkillBadge skill="React.js" color="bg-teal-500" />
          <SkillBadge skill="Node.js" color="bg-indigo-500" />
          <SkillBadge skill="MongoDB" color="bg-red-500" />
          <SkillBadge skill="REST APIs" color="bg-purple-500" />
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill, color }) => (
  <div
    className={`skill-badge rounded-full text-center w-28 py-3 text-white font-medium ${color} shadow-lg hover:scale-110 transform transition duration-300 ease-in-out`}
  >
    {skill}
  </div>
);

export default About;
