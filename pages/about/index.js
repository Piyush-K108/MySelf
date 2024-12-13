import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import {Circles} from "../../components/Circles";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAws,
} from "react-icons/fa";

import {
  SiDjango,
  SiWeb3Dotjs,
  SiTensorflow,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiPytorch,
  SiAndroidstudio,
  SiFigma,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiTailwindcss />,
          <SiAndroidstudio />,
        ],
      },
      {
        title: "Backend",
        icons: [
          <FaPython />,
          <SiDjango />,
          <SiMysql />,
          <SiPytorch />,
          <SiTensorflow />,
        ],
      },
      {
        title: "Tools",
        icons: [
          <SiFigma />,
          <FaAws />,
          <SiPostman />,
          <SiTensorflow />,
          <SiWeb3Dotjs />,
        ],
      },
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "AWS Cloud Practitioner",
        stage: "2024",
      },
      {
        title: "ICRCI Reviw Paper on YOLO",
        stage: "2022",
      },
      {
        title: "NEPTEL DATA Minigning",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelancing",
        stage: "2022 - Present",
      },
      {
        title: "Developer/Part-Time - AiRYY Rides",
        stage: "2022 - Present",
      },
      {
        title: "Intern - TechFloric",
        stage: "2022 - 2022",
      },
      {
        title: "Developer - TechFloric",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Computer Science & Enggeniring  - CDGI",
        stage: "2024",
      },

      {
        title: "Schooling-  Shri Agrasen Vidhyalaya Indore",
        stage: "2019",
      },
    ],
  },
];
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setindex] = useState(0);
  console.log(index);
  return (
    <div className="h-full  bg-primary/30  py-32 md:py-20 xl:py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto   flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col  justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xs:text-2xl md:text-5xl mt-4"
          >
            Capitalize<span className="text-accent"> stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] xs:text-xs text-justify ss:text-[0.9rem] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Embarking on the digital journey 1.5 years ago, I specialize in
            transforming imaginative concepts into functional websites and
            mobile apps. Proficient in the art of crafting digital experiences.
            <span className="md:hidden xl:inline text-justify">
              {" "}
              I bring ideas to life. With expertise in image processing, including OpenVINO, I turn
              creativity into reality with every project.
            </span>
          </motion.p>
          {/* Counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex  xl:max-w-none mx-auto xl:mx-0 mb-10"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">
                  Finished Projects
                </div>
              </div>

              {/* certificates */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]  max-w-[100px]">
                  Certificates Collected
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-[80%] xl:max-w-[48%] h-[400px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xs:-mx-[12%] xs:text-xs xl:mx-0 mb-4">
            {aboutData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={` ${
                  index === sectionIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setindex(sectionIndex)}
              >
                {section.title}
              </div>
            ))}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemindex) => {
              return (
                <div
                  key={itemindex}
                  className="flex-1 flex  flex-col ss:flex-row  sm:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => [
                      <div className="text-2xl">{icon}</div>,
                    ])}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
