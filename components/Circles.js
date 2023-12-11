import Image from "next/image";
import img from "../public/circles.png";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-0 -bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image 
      src={img}
      width={260}
      height={200}
      className="w-full   h-full"
      alt=''
      />
    </div>
  );
};
const Circles2 = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-0 -bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image 
      src={img}
      width={260}
      height={200}
      className="w-full    h-full"
      alt=''
      />
    </div>
  );
};
export  {Circles,Circles2};
