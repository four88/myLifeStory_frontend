import { Stage, OrbitControls, ContactShadows } from "@react-three/drei";
import Light from "./Light";
import Player from "./Player";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import ChapterItem from "./ChapterItem";
import { ChapterData } from "../Utils/ChapterData";

console.log(ChapterData);

export default function Experience(props) {
    // state for handle chapter mesh
    const [hasChaterItem, setHasChapterItem] = useState(true);

    console.log(ChapterData);
    return (
        <>
            <Light />
            <Player />
            <RigidBody type="fixed" position-y={-1.25}>
                <mesh receiveShadow>
                    <boxGeometry args={[50, 0.5, 50]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

            <RigidBody position-y={1} position-x={2}>
                <mesh receiveShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>

            {ChapterData.map((Chapter, index) => {
                return (
                    <ChapterItem
                        key={index}
                        hasChpaterItem={hasChaterItem}
                        chapter={Chapter}
                    />
                );
            })}

            <RigidBody type="fixed">
                <CuboidCollider args={[25, 2, 0.5]} position={[0, 1, 25]} />
                <CuboidCollider args={[25, 2, 0.5]} position={[0, 1, -25]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]} />
            </RigidBody>
            {/* <gridHelper args={[25, 25]} /> */}
        </>
    );
}
