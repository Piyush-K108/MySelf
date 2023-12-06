import Image from "next/image";
import img from "../public/top-left-img.png";
const TopLeftImg = () => {
  return (
    <div className="absolute
    opacity-50
    left-0 top-0 mix-blend-color-dodge z-1 sm:w-[200px] xs:w-[400px]">
      <Image src={img} alt=''/>
    </div>
  );
};

export default TopLeftImg;
