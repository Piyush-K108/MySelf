import Image from "next/image";
import Link from "next/Link";
import Socials from "../components/Socials"
import React,{useEffect,useRef} from "react";

const Header = () => {
  return (
  <header className="absolute z-30 w-full  flex items-center px-16 xl:px-0 xl:h-[98px]">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row md:text-3xl justify-between items-center gap-y-6
      py-4
      ">
        <Link href={'/'}>
       <h1 className="text-[#6b6767] flex  flex-col sm:flex-row sm:items-end sm:gap-2  justify-center items-center ">
          <span className=" text-[#fff] font-[200] text-4xl ">Prashant</span> Khanchandnai
       </h1>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>
  );
};

export default Header;








