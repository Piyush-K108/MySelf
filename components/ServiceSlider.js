// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Craft unique brand identity. Captivate your audience with expert branding services.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Transform ideas into stunning designs. Combine innovation and aesthetics for impactful solutions.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Build scalable digital solutions. Transform concepts into reality with cutting-edge technologies.",
  },
  {
    icon: <RxReader />,
    title: "Web Scraping",
    description: "Extract insights from the web. Utilize advanced scraping techniques for informed decision-making.",
  },
  {
    icon: <RxRocket />,
    title: "Data Engineering",
    description: "Optimize data infrastructure. Implement efficient pipelines for seamless processing and analysis.",
  },
];


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      onPaginationShow={true}
    
      pagination={{
        clickable: true,
      }}
      modules={[ FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(68,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
        hover:bg-[rgba(89,65,169,0.15)] text-center  transition-all duration-300
        "
            >
              {/* Icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              {/* title */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px]     leading-normal">
                  {item.description}
                </p>
              </div>

              {/* arow */}
              <div className="text-3xl ">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all   duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
