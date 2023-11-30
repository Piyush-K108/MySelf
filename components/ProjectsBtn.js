import Image from 'next/image'
import Link from 'next/Link';
import {HiArrowRight} from 'react-icons/hi2'
import img from "../public/rounded-text.png"
const ProjectsBtn = () => {
  return(

    <div className='mx-auto xl:mx-0'>
      <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image src={img}
        width={141}
        height={148}
        alt=''
        className='animate-spin-slow'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300 '/>
      </Link>
    </div>
  )
};

export default ProjectsBtn;
