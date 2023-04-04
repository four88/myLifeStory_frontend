import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function Tree(treePosition) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf"
  );

  return (
    <>
      <RigidBody colliders="hull" type="fixed">
        <primitive
          object={scene}
          position={[treePosition.x, treePosition.y, treePosition.z]}
        />
      </RigidBody>
    </>
  );
}
