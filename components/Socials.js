import Link from "next/link";
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiTwitterFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5  text-lg">
      <Link
        href={"https://www.instagram.com/piyush_0619/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://wa.link/gb06gm"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/prashant-khanchandani-163069236/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://github.com/Piyush-K108"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://twitter.com/PiyushKhanchan1"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterFill />
      </Link>
    </div>
  );
};

export default Socials;
