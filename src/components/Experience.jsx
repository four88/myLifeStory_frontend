import { Perf } from "r3f-perf";
import Light from "./Light";
import Player from "./Player";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useState, useEffect, useMemo } from "react";
import ChapterItem from "./ChapterItem";
import HiddenItem from "./HiddenItem";
import { ChapterData, HiddenItemData } from "../Utils/ChapterData";
import useChaptersStore from "../stores/useChaptersStore";
import useHiddenItemStore from "../stores/useHiddenItemStore";

export default function Experience() {
    // state for handle chapter mesh

    // set max chapter on useChaptersStore
    const setMaxChapter = useChaptersStore((state) => state.setMaxChapter);
    const chapters = useChaptersStore((state) => state.chapters);

    // store from useHiddenItemStore
    const { setMaxHiddenItem } = useHiddenItemStore();

    const [chapterData, setChapterData] = useState(ChapterData);
    const [hiddenItemData, setHiddenItemData] = useState(HiddenItemData);

    useEffect(() => {
        setMaxChapter(ChapterData.length);
        setMaxHiddenItem(hiddenItemData.length);
    }, []);

    const chapterItems = useMemo(
        () =>
            chapterData.map((chapter) => (
                <ChapterItem key={chapter.id} chapter={chapter} />
            )),
        [chapterData]
    );

    const hiddenItemsList = useMemo(
        () =>
            hiddenItemData.map((item) => <HiddenItem key={item.id} item={item} />),
        [chapterData]
    );

    return (
        <>
            <Perf position="top-left" />
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

            {chapterItems}
            {hiddenItemsList}

            <gridHelper args={[50, 50]} position-y={-0.99} />
        </>
    );
}
