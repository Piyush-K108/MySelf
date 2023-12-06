import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="xs:h-[110%] md:h-[96%] lg:h-[110%] bg-primary/30">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
           variants={fadeIn("up", 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input className="input" type="text" placeholder="name" />
              <input className="input" type="text" placeholder="email" />
            </div>
            <input className="input" type="text" placeholder="subject" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn flex rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[240%] group-hover:opacity-0 transition-all duration-500 ">
                Let's talk
              </span>
              <BsArrowRight className="group-hover:flex group-hover:flex-col  group-hover:justify-center -translate-y-[120%] group-hover:-translate-y-[0%]   opacity-0 group-hover:opacity-100 transition-all absolute text-[22px] duration-500" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
