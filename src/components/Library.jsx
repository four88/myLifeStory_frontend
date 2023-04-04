import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
export default function Library(props) {
  const { scene } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/library-large/model.gltf"
  );
  // shadow
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;

      obj.receiveShadow = true;
    }
  });

  return (
    <RigidBody type="fixed">
      <primitive object={scene} {...props} />;
    </RigidBody>
  );
}
