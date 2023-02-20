import Light from "./Light";
import Player from "./Player";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useState, useEffect, useMemo } from "react";
import ChapterItem from "./ChapterItem";
import { ChapterData } from "../Utils/ChapterData";
import useChaptersStore from "../stores/useChaptersStore";

export default function Experience() {
    // state for handle chapter mesh

    // set max chapter on useChaptersStore
    const setMaxChapter = useChaptersStore((state) => state.setMaxChapter);
    const chapters = useChaptersStore((state) => state.chapters);

    const [chapterData, setChapterData] = useState(ChapterData);

    useEffect(() => {
        setMaxChapter(ChapterData.length);
    }, []);

    const chapterItems = useMemo(
        () =>
            chapterData.map((chapter) => (
                <ChapterItem key={chapter.id} chapter={chapter} />
            )),
        [chapterData]
    );

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

            {chapterItems}

            <gridHelper args={[50, 50]} position-y={-0.99} />
        </>
    );
}
