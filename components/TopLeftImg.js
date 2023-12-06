import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute
    opacity-50
    left-0 top-0 mix-blend-color-dodge z-1 sm:w-[200px] xs:w-[400px]">
      <Image src={'/top-left-img.png'} width={500} height={500} alt=''/>
    </div>
  );
};

export default TopLeftImg;
