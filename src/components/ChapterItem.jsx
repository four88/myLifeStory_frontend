import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import usePopupStore from "../stores/usePopupStore";
import useChaptersStore from "../stores/useChaptersStore";
import * as THREE from "three";

export default function ChapterItem({ hasChpaterItem, chapter }) {
  const rigidRef = useRef();

  // store for control popup open and show chapter that player get
  const setPopupOpen = usePopupStore((state) => state.setPopup);
  const isPopupOpen = usePopupStore((state) => state.popup);
  const setCurrentChapter = usePopupStore((state) => state.setChapter);

  // store for keep chapter on bags
  const addChapter = useChaptersStore((state) => state.addChapter);
  const currentChapterStore = useChaptersStore((state) => state.chapters);

  // for control item appear of not
  const [showChapterItem, setShowChapterItem] = useState(hasChpaterItem);

  const chapterEnter = () => {
    // remove RigidBody
    setShowChapterItem(false);

    // handle with chapter
    setPopupOpen(true);
    setCurrentChapter(chapter);

    // add item to store
    addChapter(chapter);

    console.log(currentChapterStore);
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

  console.log(chapter.no);

  return (
    <>
      {showChapterItem && (
        <RigidBody
          ref={rigidRef}
          type="kinematicPosition"
          position={[
            chapter.position.x,
            chapter.position.y,
            chapter.position.z,
          ]}
          onCollisionEnter={chapterEnter}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
      )}
    </>
  );
}
