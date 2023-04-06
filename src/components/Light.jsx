import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

export default function Lights() {
  const light = useRef();

  const camera = useThree((state) => state.camera);

  // useHelper(light, THREE.DirectionalLightHelper, 1);

  useFrame((state) => {
    light.current.target.position.z = camera.position.z;
    light.current.target.position.x = camera.position.x;

    light.current.shadow.camera.position.set(
      camera.position.x,
      150,
      camera.position.z
    ); // Set shadow camera position to the top of the scene
    // Update the shadow camera position to match the camera position
    // light.current.shadow.camera.position.copy(camera.position);
    light.current.target.updateMatrixWorld();
  });

  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={[1, 20, 1]}
        intensity={0.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.2}
        shadow-camera-far={400}
        shadow-camera-top={50}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-position={[1, 10, 1]}
        shadow-camera-fov={40}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}
