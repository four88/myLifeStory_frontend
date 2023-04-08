import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";
import usePopupStore from "../stores/usePopupStore";
import useChaptersStore from "../stores/useChaptersStore";
import { useGLTF, useTexture, Sparkles } from "@react-three/drei";
import * as THREE from "three";
// import { useMatcapTexture } from "use-r3f-assets";

function ChapterItem({ chapter, position }) {
  const { scene } = useThree();
  const rigidRef = useRef();

  // store for control popup open and show chapter that player get
  const setGetChapterPopupOpen = usePopupStore(
    (state) => state.setPopupGetChapter
  );

  const setCurrentChapter = usePopupStore((state) => state.setChapter);

  // store for keep chapter on bags
  const addChapter = useChaptersStore((state) => state.addChapter);

  // for control item appear of not
  const [showChapterItem, setShowChapterItem] = useState(true);

  const chapterEnter = () => {
    // remove RigidBody
    setShowChapterItem(false);

    // handle with chapter
    setCurrentChapter(chapter);
    setGetChapterPopupOpen(true);

    // add item to store
    addChapter(chapter);

    // remove component from scene
    scene.remove(rigidRef.current);
  };

  useFrame((state) => {
    if (showChapterItem) {
      const time = state.clock.getElapsedTime();

      const eulerRotation = new THREE.Euler(0, time, 0);
      const quaternionRotation = new THREE.Quaternion();
      quaternionRotation.setFromEuler(eulerRotation);
      rigidRef.current.setNextKinematicRotation(quaternionRotation);
    }
  });

  const chapterMesh = useGLTF("./model/chapter.glb");

  chapterMesh.scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;

      obj.receiveShadow = true;
    }
  });

  return (
    <>
      {showChapterItem && (
        <>
          <Sparkles
            color="cyan"
            size={40}
            speed={0.6}
            scale={[4, 2, 4]}
            count={20}
            position={[position.x, 1, position.z]}
          />
          <RigidBody
            ref={rigidRef}
            type="kinematicPosition"
            position={[position.x, position.y, position.z]}
            onCollisionEnter={chapterEnter}
          >
            <pointLight
              castShadow
              position={[0, 3, 0]} // You can change the position relative to the item
              distance={8} // You can adjust the distance to control the light's reach
              intensity={6} // Adjust the intensity of the light
              decay={4} // Adjust the decay of the light
              color="#F3D6B"
            />
            <primitive
              object={chapterMesh.scene.clone()}
              rotation-x={Math.PI * 0.25}
              scale={1.5}
            />
          </RigidBody>
        </>
      )}
    </>
  );
}

export default memo(ChapterItem);
