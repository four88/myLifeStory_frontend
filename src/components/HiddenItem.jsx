import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";
import usePopupStore from "../stores/usePopupStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import * as THREE from "three";

function HiddenItem({ item, position }) {
  const { scene } = useThree();
  const rigidRef = useRef();

  // store for control popup open and show chapter that player get
  // const setGetChapterPopupOpen = usePopupStore(
  //   (state) => state.setPopupGetChapter
  // );
  //
  // const setCurrentChapter = usePopupStore((state) => state.setChapter);
  const { setPopupGetHiddenItem, setHiddenItem } = usePopupStore();

  // store for keep chapter on bags
  const { addHiddenItem } = useHiddenItemStore();

  // for control item appear of not
  const [showHiddenItem, setShowHiddenItem] = useState(true);

  const chapterEnter = () => {
    // remove RigidBody
    setShowHiddenItem(false);

    // handle with currentHiddenItem and popup
    setHiddenItem(item);
    setPopupGetHiddenItem(true);

    // add item to store
    // addChapter(chapter);
    addHiddenItem(item);

    // remove component from scene
    scene.remove(rigidRef.current);
  };

  useFrame((state) => {
    if (showHiddenItem) {
      const time = state.clock.getElapsedTime();

      const eulerRotation = new THREE.Euler(0, time, 0);
      const quaternionRotation = new THREE.Quaternion();
      quaternionRotation.setFromEuler(eulerRotation);
      rigidRef.current.setNextKinematicRotation(quaternionRotation);
    }
  });

  return (
    <>
      {showHiddenItem && (
        <RigidBody
          ref={rigidRef}
          type="kinematicPosition"
          position={[position.x, position.y, position.z]}
          onCollisionEnter={chapterEnter}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
          </mesh>
        </RigidBody>
      )}
    </>
  );
}

export default memo(HiddenItem);
