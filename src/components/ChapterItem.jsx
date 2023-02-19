import { RigidBody, useRapier } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import usePopupStore from "../stores/usePopupStore";

export default function ChapterItem({ hasChpaterItem, chapter }) {
  const mesh = useRef();

  // store for control popup open and show chapter that player get
  const setPopupOpen = usePopupStore((state) => state.setPopup);
  const isPopupOpen = usePopupStore((state) => state.popup);
  const setCurrentChapter = usePopupStore((state) => state.setChapter);

  const [showChapterItem, setShowChapterItem] = useState(hasChpaterItem);

  const chapterEnter = () => {
    console.log("get chapter: " + chapter.no);

    mesh.current.geometry.dispose();
    mesh.current.material.dispose();
    mesh.current.parent.remove(mesh.current);

    // remove RigidBody
    setShowChapterItem(false);

    // handle with chapter
    setPopupOpen(true);
    setCurrentChapter(chapter);
    console.log(isPopupOpen);
  };

  return (
    <>
      {showChapterItem && (
        <RigidBody
          type="kinematicPosition"
          position={[
            chapter.position.x,
            chapter.position.y,
            chapter.position.z,
          ]}
          onCollisionEnter={chapterEnter}
        >
          <mesh ref={mesh}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
            <Html>
              <h1>{chapter.no}</h1>
            </Html>
          </mesh>
        </RigidBody>
      )}
    </>
  );
}
