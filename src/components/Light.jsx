import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lights() {
  const light = useRef();
  useFrame((state) => {
    light.current.position.z = state.camera.position.z + 1 - 4;
    light.current.target.position.z = state.camera.position.z - 4;
    light.current.target.updateMatrixWorld();
  });
  return (
    <>
      <directionalLight
        ref={light}
        castShadow
        position={[4, 10, 1]}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={100}
        shadow-camera-top={50}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}
