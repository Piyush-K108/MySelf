import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Avatar from "../../components/Avatar";
import Backdrop from "./Backdrop";
import CamrraRig from "./CameraRig";
const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city"/>
      {/* <CamrraRig>
        <Backdrop>
          
        </Backdrop>
      </CamrraRig> */}
      <Center>
        <Avatar/>
      </Center>
    </Canvas>
  );
};

export default CanvasModel;
