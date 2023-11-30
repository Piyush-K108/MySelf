import Image from "next/image";
import img from "../public/avatar.png";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={img}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 h-[80vh]"
      />
    </div>
  );
};

export default Avatar;
