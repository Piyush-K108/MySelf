import Bulb from "../../components/Bulb";
import {Circles} from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider"
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="h-[100%] lg:h-[99%] sm:h-[99%] xl:h-[100%] bg-primary/30  flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col  xl:text-left ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2  xl:mt-16"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[480px] mx-auto xl:mx-0 md:text-justify"
            >
               With a passion for innovation and creativity, my projects showcase a blend of cutting-edge technology and elegant design, creating unique and impactful solutions.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
