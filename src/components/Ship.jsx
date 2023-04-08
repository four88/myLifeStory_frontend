import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

export default function Ship({ shipPosition }) {
  const { scene } = useGLTF("./model/ship.gltf");

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const { x, z } = shipPosition;
  return (
    <>
      <RigidBody
        colliders="hull"
        type="fixed"
        position={[x, -1, z]}
        scale={2.5}
        rotation-y={Math.random() * Math.PI * 2}
      >
        <primitive object={scene.clone()} />
      </RigidBody>
    </>
  );
}
