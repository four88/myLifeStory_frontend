import Popup from "./Popup";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import Light from "./Light";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useState, Suspense } from "react";
import PlayerCostume from "./PlayerCostume";
import CostumeForm from "./CostumeForm";
import closeIcon from "/image/closeIcon.svg";
import usePopupStore from "../stores/usePopupStore";

export default function CostumePopup() {
  const { popupCostume, setPopupCostume } = usePopupStore();
  const [showModel, setShowModel] = useState(true);

  useEffect(() => {
    if (!popupCostume) {
      setShowModel(false);
    } else {
      setShowModel(true);
    }
  }, [popupCostume]);

  return (
    <Popup isPopupOpen={popupCostume}>
      <section className="w-[968px] bg-white h-[698px] z-20 rounded-lg relative flex flex-row drop-shadow-2xl px-8 py-8">
        <button
          className="w-5 bg-red-400 h-5 flex rounded-md absolute top-2 right-2 hover:bg-red-600"
          onClick={() => {
            setPopupCostume(false);
          }}
        >
          <img src={closeIcon} alt="closeIcon" className="m-auto w-3 h-3" />
        </button>
        <div className="w-[60%] h-full">
          {showModel && (
            <Canvas
              shadows
              camera={{
                fov: 43,
                near: 0.1,
                far: 100,
                position: [1, 1.75, 6],
              }}
            >
              <Suspense>
                <PlayerCostume />
              </Suspense>
              <Light />
            </Canvas>
          )}
        </div>
        <div className="w-[40%] h-full bg-gray-100 rounded-lg drop-shadow-md">
          <CostumeForm />
        </div>
      </section>
    </Popup>
  );
}
