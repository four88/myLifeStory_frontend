import * as THREE from "three";
import { Perf } from "r3f-perf";
import Light from "./Light";
import Player from "./Player";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useState, useEffect, useMemo } from "react";
import ChapterItem from "./ChapterItem";
import chapterApi from "../api/ChapterApi";
import hiddenItemApi from "../api/HiddenItemApi";
import HiddenItem from "./HiddenItem";
import { ChapterData, HiddenItemData } from "../Utils/ChapterData";
import useChaptersStore from "../stores/useChaptersStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import Tree from "./Tree";
import House from "./House";
import useUserStore from "../stores/useUserStore";
import { Environment, Stage } from "@react-three/drei";
import Library from "./Library";
import FireTruck from "./FireTruck";
import Rock from "./Rock";
import { useLoader } from "@react-three/fiber";

export default function Experience() {
    const minItemDistance = 20; // Adjust this value based on your requirements
    const housePosition = new THREE.Vector3(-30, -1, 40);
    const libraryPosition = new THREE.Vector3(50, -1, 30);
    const truckPosition = new THREE.Vector3(-20, -1, -30);

    const usedPositions = [];
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max) - max / 2;
    };

    const getRandomPosition = (position_y) => {
        let position;
        do {
            position = new THREE.Vector3(
                getRandomInt(150),
                position_y,
                getRandomInt(150)
            );
        } while (
            usedPositions.some((p) => p.distanceTo(position) < minItemDistance) ||
            position.distanceTo(housePosition) < minItemDistance ||
            position.distanceTo(libraryPosition) < minItemDistance ||
            position.distanceTo(truckPosition) < minItemDistance
        );
        usedPositions.push(position);
        return position;
    };

    // set max chapter on useChaptersStore
    const { setMaxChapter, clearChapter } = useChaptersStore();
    const { user } = useUserStore();

    // store from useHiddenItemStore
    const { setMaxHiddenItem, clearHiddenItem } = useHiddenItemStore();

    const [chapterData, setChapterData] = useState([]);
    const [hiddenItemData, setHiddenItemData] = useState([]);

    useEffect(() => {
        chapterApi
            .getUserChapter(user.token, user._id)
            .then((res) => {
                setChapterData(res.data);
                setMaxChapter(res.data.length);
            })
            .then(() => {
                hiddenItemApi
                    .getUserHiddenItem(user.token, user._id)
                    .then((res) => {
                        setHiddenItemData(res.data);
                        setMaxHiddenItem(res.data.length);
                    })

                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

        return () => {
            setChapterData([]);
            setHiddenItemData([]);
        };
    }, []);

    const chapterItems = useMemo(
        () =>
            chapterData.map((chapter) => (
                <ChapterItem
                    key={chapter._id}
                    chapter={chapter}
                    position={getRandomPosition(0.5)}
                />
            )),
        [chapterData]
    );

    const hiddenItemsList = useMemo(
        () =>
            hiddenItemData.map((item) => (
                <HiddenItem
                    key={item._id}
                    item={item}
                    position={getRandomPosition(0.5)}
                />
            )),
        [hiddenItemData]
    );

    return (
        <>
            <Perf position="top-left" />

            <Light />

            <fog attach="fog" args={["white", 5, 50]} />
            <Environment
                background={false}
                files={
                    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/the-sky-is-on-fire/the_sky_is_on_fire_1k.hdr"
                }
            />
            <Player />

            <RigidBody type="fixed" position-y={-1.25}>
                <mesh receiveShadow>
                    <boxGeometry args={[150, 0.5, 150]} />
                    <meshStandardMaterial color={"greenyellow"} attach="material" />
                </mesh>
            </RigidBody>
            {chapterItems}
            {hiddenItemsList}
            {/* <gridHelper args={[100, 100]} position-y={-0.99} /> */}
            <House position={[-30, -1, 40]} scale={25} />
            <Library position={[50, -1, 30]} scale={15} />
            <FireTruck position={[-20, -1.1, -30]} scale={3} />
            <Rock position={[0, -1, 8]} scale={5} />
        </>
    );
}
