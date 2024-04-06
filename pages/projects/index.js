import React, { useState,useEffect } from "react";
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
    <section className="xs:h-[70vh] ss:h-[70vh] sm:h-[70vh] md:h-[84vh] bg-[#1a1333] flex justify-center w-full snap-center scrollbar-thin ">
      <div className="container">
        <div className="wrapper xs:flex-col">
          <div
            className="flex-1 flex items-center justify-center relative overflow-hidden group "
            ref={ref}
          >
            <Image
              className="xs:mt-10  h-full w-full justify-center "
              src={item.img}
              width={500}
              height={500}
              alt=""
             
            />
            <div
              className="absolute  inset-0 bg-gradient-to-bl from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-70 transition-all duration-700"
            ></div>

            {/* title */}
            <div
              className="absolute bottom-0 translate-y-full  xs:group-hover:-translate-y-16   group-hover:ss:-translate-y-8 group-hover:md:-translate-y-16 group-hover:sm:-translate-y-10  group-hover:xl:-translate-y-[5rem]
                        transition-all duration-300
                        "
            >
              <a 
              href={item.clink}
              className=" text-[13px] xs:text-[18px] lg:text-[24px] tracking-[0.2rem] group-hover:-translate-y-6 flex items-center justify-center gap-x-2 ">
                {/* 1 */}
                <div className="delay-100">Actual </div>
                {/* 2 */}
                <div className="translate-y-[500%] group-hover:-translate-y-0 transition-all duration-300 delay-150">
                  {" "}
                  Code{" "}
                </div>
                {/* icon */}
                <div className="text-xl  xs:text-[18px] lg:text-[24px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </a>
              <a 
              href={item.plink}
              className=" text-[13px] xs:text-[18px] tracking-[0.2rem] lg:text-[24px] flex items-center justify-center gap-x-2 ">
                {/* 1 */}
                <div className="delay-100">LIVE </div>
                {/* 2 */}
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  {" "}
                  PROJECT{" "}
                </div>
                {/* icon */}
                <div className="text-xl  xs:text-[18px] lg:text-[24px] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                  <BsArrowRight />
                </div>
              </a>
            </div>
          </div>
          <motion.div 
           style={{ y }}
          className="textContainer flex-1 flex  flex-col justify-start">
            <h2 className="h2 flex justify-center xs:text-2xl ss:text-xl sm:text-[1.8rem] lg:text-[2.9rem] xl:text-[3.7rem] ">
              {item.title}<span className="text-accent">.</span>
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
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      // Adjust the threshold as needed
      setHideImage(scrollPosition > 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 70,
  });

  return (
    <div className="portfolio xs:pt-24 ss:pt-24 img:mr-20" ref={ref}>
      <div className="progress z-10 ">
        <h1 className="xs:hidden  flex flec-row justify-center  ss:hidden">
          Featured Works
          {hideImage ? null : (
            <motion.img
              className="w-16 h-10"
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          )}
        </h1>
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
    id: -1,
    clink: "https://github.com/Piyush-K108/MA",
    plink: "https://mataniarchitects.com/",
    title: "Matani Architects",
    img: "/mataniarchitects.png",
    desc: "Explore the innovative designs and architectural brilliance of Matani Architects. Visit our website to witness our projects and expertise in the field of architecture.",
  },
  {
    id: 0,
    clink: "https://github.com/Piyush-K108/AiryyWeb2",
    plink: "https://airyyrides.com/",
    title: "AiRYY Rides",
    img: "/ARHERO.png",
    desc: "AiRYY Rides Website. For Advertizing and book bikes from website itself.",
  },
  {
    id: 1,
    clink: "https://github.com/Piyush-K108/Airry_Admin_Portal",
    plink: "https://admin.airyyrides.com/",
    title: "AiRYY Admin",
    img: "/adminairyy.png",
    desc: "Manage your AiRYY Electric and Petrol Bike Rental Service efficiently with the AiRYY Admin Portal.",
  },

  {
    id: 2,
    clink: "https://github.com/Piyush-K108/The-Gamers-Arena",
    plink: "",
    title: "Object Detection",
    img: "/object detection.jpg",
    desc: "Experience the power of Object Detection technology. Explore potential use cases in various applications.",
  },
  {
    id: 3,
    clink: "https://github.com/Piyush-K108/Openvino_Android",
    plink: "",
    title: "Driving Alert",
    img: "/Driving.jpg",
    desc: "Enhance road safety with the Driving Alert system. This security feature ensures the driver's attention, monitors face gaze, seat belt usage, and prevents distractions.",
  },
  {
    id: 4,
    clink: "https://github.com/Piyush-K108/Epsilon-Backend",
    plink: "",
    title: "Epsilon",
    img: "/Epsilon.jpg",
    desc: "Connect teachers and students seamlessly with Epsilon, an app designed for special education. It includes personalized profiles for special ed teachers and an in-app messaging system. Be part of an educational revolution.",
  },
  {
    id: 5,
    clink: "https://github.com/Piyush-K108/The-Gamers-Arena",
    plink: "",
    title: "Gamer's Arena",
    img: "/gamerArena.jpg",
    desc: "Immerse yourself in the gaming world with Gamer's Arena. This desktop app allows you to buy CDs of games for different consoles. Sellers can efficiently record and manage their gaming inventory. Level up your gaming experience.",
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





