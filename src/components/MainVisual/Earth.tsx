"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";

const Earth = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 180] }}
        style={{
          height: "100vh",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        <ambientLight intensity={2.0} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Model url="/earth.fbx" />
      </Canvas>
    </>
  );
};

export default Earth;
