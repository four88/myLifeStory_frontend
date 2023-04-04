import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Model(props) {
  const { scene } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/formation-large-stone/model.gltf"
  );

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;

      obj.receiveShadow = true;
    }
  });

  return <primitive object={scene} {...props} />;
}
