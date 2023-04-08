import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

export default function Tree({ treePosition }) {
  const { scene } = useGLTF("./model/tree.glb");

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  const { x, z } = treePosition;
  return (
    <>
      <RigidBody colliders="hull" type="fixed" position={[x, -1, z]} scale={2}>
        <primitive object={scene.clone()} />
      </RigidBody>
    </>
  );
}
