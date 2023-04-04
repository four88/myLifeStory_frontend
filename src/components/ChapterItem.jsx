import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";
import usePopupStore from "../stores/usePopupStore";
import useChaptersStore from "../stores/useChaptersStore";
import * as THREE from "three";

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

  return (
    <>
      {showChapterItem && (
        <RigidBody
          ref={rigidRef}
          type="kinematicPosition"
          position={[position.x, position.y, position.z]}
          onCollisionEnter={chapterEnter}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry />
            <meshPhongMaterial emissive="red" />
          </mesh>
        </RigidBody>
      )}
    </>
  );
}

export default memo(ChapterItem);
