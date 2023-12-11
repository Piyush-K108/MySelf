import React from "react";
import Image from "next/image";
import { fadeIn } from "../../variants";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="xs:h-[70vh] ss:h-[70vh] sm:h-[70vh] md:h-[84vh] bg-[#1a1333] flex justify-center w-full snap-center ">
      <div className="container">
        <div className="wrapper xs:flex-col">
          <div
            className="flex-1 flex h-[50%] items-center justify-center relative overflow-hidden group "
            ref={ref}
          >
            <Image
              className="xs:mt-10 justify-center "
              src={item.img}
              width={400}
              height={500}
              alt=""
             
            />
            <div
              className="absolute  inset-0 bg-gradient-to-bl from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-70 transition-all duration-700"
            ></div>

            {/* title */}
            <div
              className="absolute bottom-0 translate-y-full  xs:group-hover:-translate-y-6   group-hover:ss:-translate-y-14 group-hover:md:-translate-y-16  group-hover:xl:-translate-y-32  
                        transition-all duration-300
                        "
            >
              <a 
              href={item.clink}
              className=" text-[13px] xs:text-[8px] tracking-[0.2rem] group-hover:-translate-y-6 flex items-center justify-center gap-x-2 ">
                {/* 1 */}
                <div className="delay-100">Actual </div>
                {/* 2 */}
                <div className="translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-150">
                  {" "}
                  Code{" "}
                </div>
                {/* icon */}
                <div className="text-xl  xs:text-[14px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </a>
              <a 
              href={item.plink}
              className=" text-[13px] xs:text-[8px] tracking-[0.2rem] flex items-center justify-center gap-x-2 ">
                {/* 1 */}
                <div className="delay-100">LIVE </div>
                {/* 2 */}
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  {" "}
                  PROJECT{" "}
                </div>
                {/* icon */}
                <div className="text-xl  xs:text-[14px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </a>
            </div>
          </div>
          <motion.div 
           style={{ y }}
          className="textContainer flex-1 flex  flex-col justify-start">
            <h2 className="h2 flex justify-center xs:text-2xl ss:text-xl sm:text-[1.9rem] lg:text-[3rem] xl:text-[3.9rem] ">
              {item.title}
            </h2>
            <p className="xs:text-xs ss:text-xs    sm:text-justify     ss:text-center xs:text-center">
              {item.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 70,
  });

  return (
    <div className="portfolio  xs:pt-24 ss:pt-24  " ref={ref}>
      <div className="progress">
        <h1 className="xs:hidden ss:hidden">Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;

const items = [
  {
    id: 1,
    clink:"",
    plink:"",
    title: "Object Detection",
    img: "/object detection.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    clink:"",
    plink:"",
    title: "Driving Alert",
    img: "/Security.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    clink:"",
    plink:"",
    title: "Epsilon",
    img: "/Epsilon.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    clink:"https://github.com/Piyush-K108/The-Gamers-Arena",
    plink:"",
    title: "Gamer's Arena",
    img: "/gamerArena.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};