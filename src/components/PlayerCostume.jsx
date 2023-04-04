import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function PlayerCostume() {
  const character = useGLTF("./model/player_costume.glb");

  const { actions, mixer } = useAnimations(
    character.animations,
    character.scene
  );

  useFrame(() => {
    actions.idle.play();
  });

  return (
    <primitive
      object={character.scene}
      position={[0.7, 0.5, 4]}
      rotation-y={Math.PI + 0.25}
    />
  );
}
