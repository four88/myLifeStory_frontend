import * as THREE from "three";
import { Perf } from "r3f-perf";
import Light from "./Light";
import Player from "./Player";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useState, useEffect, useMemo, useRef } from "react";
import ChapterItem from "./ChapterItem";
import chapterApi from "../api/ChapterApi";
import hiddenItemApi from "../api/HiddenItemApi";
import HiddenItem from "./HiddenItem";
import useChaptersStore from "../stores/useChaptersStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";
import Tree from "./Tree";
import Rock from "./Rock";
import Ship from "./Ship";
import useUserStore from "../stores/useUserStore";
import { Environment, Stars, shaderMaterial } from "@react-three/drei";
import { PlaneGeometry } from "three";

export default function Experience() {
    const minItemDistance = 2; // Adjust this value based on your requirements

    const usedPositions = [];
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max) - max / 2;
    };

    const getRandomPosition = (position_y) => {
        let position;
        do {
            position = new THREE.Vector3(
                getRandomInt(100),
                position_y,
                getRandomInt(100)
            );
        } while (
            usedPositions.some((p) => p.distanceTo(position) < minItemDistance)
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
                        console.log(treePositions);
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

    const [treePositions, setTreePositions] = useState([]);
    const [rockPositions, setRockPositions] = useState([]);
    const [shipPosition, setShipPosition] = useState(null);

    useEffect(() => {
        const trees = Array(30)
            .fill(null)
            .map(() => getRandomPosition(0));
        setTreePositions(trees);

        const rocks = Array(10)
            .fill(null)
            .map(() => getRandomPosition(0));
        setRockPositions(rocks);

        setShipPosition(getRandomPosition(0));
    }, []);

    const generateTrees = () => {
        return treePositions.map((item, index) => (
            <Tree key={`tree-${index}`} treePosition={item} />
        ));
    };

    const generateRocks = () => {
        return rockPositions.map((item, index) => (
            <Rock key={`rock-${index}`} rockPosition={item} />
        ));
    };

    return (
        <>
            {/* <Perf position="top-left" /> */}

            <Light />

            <Stars />
            <fog attach="fog" args={["#030202", 5, 50]} />
            <Environment background={false} preset="night" />
            <Player />
            <CuboidCollider args={[50, 2, 0.5]} position={[0, 1, 51]} />
            <CuboidCollider args={[50, 2, 0.5]} position={[0, 1, -51]} />
            <CuboidCollider args={[0.5, 2, 50]} position={[51, 1, 0]} />
            <CuboidCollider args={[0.5, 2, 50]} position={[-51, 1, 0]} />
            <RigidBody type="fixed" position-y={-1.25}>
                <mesh receiveShadow>
                    <boxGeometry args={[100, 0.5, 100]} />
                    <meshStandardMaterial
                        color={"greenyellow"}
                        attach="material"
                        envMapIntensity={0.5}
                    />
                </mesh>
            </RigidBody>
            {chapterItems}
            {hiddenItemsList}
            {generateTrees()}
            {generateRocks()}
            {shipPosition && <Ship shipPosition={shipPosition} />}
        </>
    );
}
