import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import CamrraRig from "./CameraRig";
import ME from "./ME";
const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, -18, 10], fov: 5  }}>
     
      <Environment preset="sunset" />
      <CamrraRig>
          <Center>
            <ME animation={'Pointing'}/>
          </Center>
    </CamrraRig>
    </Canvas>
  );
};

export default CanvasModel;
