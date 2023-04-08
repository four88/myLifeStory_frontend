import { RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, memo } from "react";
import usePopupStore from "../stores/usePopupStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import { useGLTF, useHelper, Sparkles } from "@react-three/drei";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function HiddenItem({ item, position }) {
  const { scene } = useThree();
  const rigidRef = useRef();

  const matcap = useTexture("texture/F75F0B_461604_9A3004_FB9D2F-256px.png");

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

  const itemMesh = useGLTF("./model/item.glb");

  itemMesh.scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;

      obj.receiveShadow = true;
    }
  });

  return (
    <>
      {showHiddenItem && (
        <>
          <Sparkles
            color="orange"
            size={40}
            speed={0.6}
            scale={[4, 2, 4]}
            count={20}
            position={[position.x, 1, position.z]}
          />
          <RigidBody
            ref={rigidRef}
            type="kinematicPosition"
            colliders="cuboid"
            position={[position.x, -0.5, position.z]}
            onCollisionEnter={chapterEnter}
          >
            <pointLight
              castShadow
              position={[0, 3, 0]} // You can change the position relative to the item
              distance={8} // You can adjust the distance to control the light's reach
              intensity={6} // Adjust the intensity of the light
              decay={4} // Adjust the decay of the light
              color="orange"
            />

            <primitive
              object={itemMesh.scene.clone()}
              scale={1}
              envMapIntensity={0.5}
            />
          </RigidBody>
        </>
      )}
    </>
  );
}

export default memo(HiddenItem);
