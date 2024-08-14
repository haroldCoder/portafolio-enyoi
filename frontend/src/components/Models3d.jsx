import React, {useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

export default function Models3d({path}) {
  const { scene } = useGLTF("/animations/scene/scene.gltf");
  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  const disableShadows = (object) => {
    object.castShadow = false;
    object.receiveShadow = false;
    if (object.children) {
      object.children.forEach(disableShadows);
    }
  };

  if (modelRef.current) {
    disableShadows(modelRef.current);
  }

  return (
    <>
      <primitive object={scene} ref={modelRef} />
    </>
  );
}
