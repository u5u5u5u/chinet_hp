import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { AnimationMixer } from "three";

interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const fbx = useFBX(url);
  const mixerRef = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    // モーション再生
    if (fbx.animations.length > 0) {
      const mixer = new AnimationMixer(fbx);
      mixer.clipAction(fbx.animations[1]).play();
      mixerRef.current = mixer;
    }
  }, [fbx]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  return <primitive object={fbx} />;
};

export default Model;
