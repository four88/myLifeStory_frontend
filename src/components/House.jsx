import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
export default function House(props) {
  const { scene } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/house-5/model.gltf"
  );

  // shadow
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return (
    <RigidBody type="fixed" colliders="hull">
      <primitive object={scene} {...props} />;
    </RigidBody>
  );
}
