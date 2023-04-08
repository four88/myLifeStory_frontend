import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

export default function Rock({ rockPosition }) {
  const { scene } = useGLTF("./model/wall.gltf");

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const { x, z } = rockPosition;
  return (
    <>
      <RigidBody
        colliders="hull"
        type="fixed"
        position={[x, -1, z]}
        scale={Math.random() + 1.2}
        rotation-y={Math.random() * Math.PI * 2}
      >
        <primitive object={scene.clone()} />
      </RigidBody>
    </>
  );
}
