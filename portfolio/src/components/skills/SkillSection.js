"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillSection = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "TailwindCss", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Javascript/Typescript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MonogoDB", level: 80 },
  ];

  return (
    <div id="skills" className="flex justify-center items-center w-full">
      <div className="flex flex-col gap-12">
        <h1 className="text-white text-4xl font-semibold text-center">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-[#222] p-6 rounded-lg flex flex-col gap-2 w-[300px]"
              initial={{opacity: 0, y: 50}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h1 className="text-white font-semibold text-1xl">
                {skill.name}
              </h1>

              <div className="flex items-center gap-4">
                <motion.div
                  className="h-2 rounded-full bg-purple-700"
                  initial={{ width: "0%" }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 1.2 }}
                />
                <span className="text-white">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
