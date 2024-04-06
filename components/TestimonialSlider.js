import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ type: "bullets" }}
        modules={[Navigation, Pagination]}
        className="xs:h-[300px] h-[400px] img:mr-20"
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row gap-x-0 h-full px-16">
                {/* avatar,name,position */}
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                  <div className="flex flex-col justify-center text-center ">
                    <div className="mb-2 mx-auto ">
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="text-lg">{person.name}</div>
                    <div className="text-[12px] uppercase font-extralight tracking-widest">
                      {person.position}
                    </div>
                  </div>
                </div>
                {/* quote and message */}
                <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px relative xl:pl-20">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  </div>
                  <div className="xl:text-lg text-center    xs:text-xs    md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Aarti Matani",
    position: "Customer",
    message:
      "Working with Prashant has been amazing.  Their expertise in web development and app design truly impressed me. The Airyy website and team app they created are both stunning and functional. I highly recommend their services!",
  },
  {
    image: "/t-avt-2.png",
    name: "Karan Bajaj",
    position: "Customer",
    message:
      "Prashant exceeded our expectations with our website redesign. Their creativity and attention to detail were outstanding. Our new website reflects our brand perfectly and has received great feedback. We're very pleased with the results!",
  },

];
