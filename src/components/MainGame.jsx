import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Physics, Debug } from "@react-three/rapier";
import GetChapterPopup from "./GetChapterPopup";
import BagPopup from "./BagPopup";
import MenuBar from "./MenuBar";
import GetHiddenItemPopup from "./GetHiddenItemPopup";
import { Suspense } from "react";
import CostumePopup from "./CostumePopup.jsx";

export default function MainGame() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 35,
          near: 0.1,
          far: 100,
          position: [1, 2, 6],
        }}
      >
        <Suspense>
          <Physics gravity={[0, -9.81, 0]}>
            {/* <Debug /> */}
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>

      <BagPopup />
      <GetChapterPopup />
      <GetHiddenItemPopup />
      <CostumePopup />
      <MenuBar />
    </>
  );
}
