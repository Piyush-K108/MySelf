import Image from "next/image";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal ,useGLTF,useTexture} from "@react-three/drei";

const Avatar = () => {
  // const Avatar = useSnapshot(state);
  // const {nodes,materilas}=useGLTF('')
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 h-[80vh]"
      />
    </div>
  );
};

export default Avatar;
