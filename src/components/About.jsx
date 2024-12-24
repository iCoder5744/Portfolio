import React from "react";

const About = () => (
  
    <section className="bg-gray-800 text-white rounded-b-[50px] p-3 sm:p-6 lg:flex lg:space-x-8">
      {/* About Me Section */}
      <div className="w-full lg:w-1/2 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Hello, I'm <br /> <span className="text-green-400">Shivam Yadav!</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 sm:leading-relaxed">
        I’m a passionate web developer currently pursuing a Bachelor of Computer Applications (BCA) at City College of Management and Technology, Lucknow. As a first-year student, I’ve built a strong foundation in modern web development technologies and am focused on creating intuitive, responsive, and stylish user interfaces.        </p>
        <ul className="text-sm sm:text-base list-disc list-inside text-gray-300">
          <li>
            I'm currently learning full-stack development with React.js, Next.js, and Node.js.
          </li>
          <li>
            Experienced In Building User-Friendly, Responsive Designs With Tailwind CSS And REST APIs.
          </li>
          <li>Continuously Exploring New Technologies To Expand My Skills.</li>
        </ul>
        <p className="text-sm sm:text-base text-gray-300 sm:mt-4">
          I Aspire To Excel In Both Frontend And Backend Development And Make A Meaningful Impact In The Tech Industry While Learning And Growing Every Step Of The Way.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">
          My Skills
        </h3>
        {/* Skill Container for Large Screens */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start lg:gap-x-10 lg:gap-y-6">
          {/* Skill Badges */}
          <SkillBadge skill="HTML" color="bg-green-500" />
          <SkillBadge skill="CSS" color="bg-blue-500" />
          <SkillBadge skill="JavaScript" color="bg-yellow-500" />
          <SkillBadge skill="React.js" color="bg-teal-500" />
          <SkillBadge skill="Node.js" color="bg-indigo-500" />
          <SkillBadge skill="MongoDB" color="bg-red-500" />
          <SkillBadge skill="REST APIs" color="bg-purple-500" />
        </div>
      </div>
    </section>
);

const SkillBadge = ({ skill, color }) => (
  <div
    className={`rounded-full px-6 py-3 text-white font-medium ${color} shadow-lg hover:scale-110 transform transition duration-300 ease-in-out`}
  >
    {skill}
  </div>
);

export default About;
