import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CamrraRig from "./CameraRig";
import ME from "./ME";
const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, -18, 10], fov: 5  }}>
      <OrbitControls/>
      <Environment preset="sunset" />
      
          <Center>
            <ME animation={'Pointing'}/>
          </Center>
    
    </Canvas>
  );
};

export default CanvasModel;
