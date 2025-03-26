import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Mesh, AnimationMixer } from "three";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const fbx = useFBX(url);
  const meshRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return <primitive ref={meshRef} object={fbx} position={[-50, 0, 0]} />;
};

export default Model;
