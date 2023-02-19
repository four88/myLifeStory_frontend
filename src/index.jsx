import "./style.css";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import { Physics, Debug } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import usePopupStore from "./stores/usePopupStore";
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 100,
                position: [1, 2, 6],
            }}
        >
            <Physics gravity={[0, -9.81, 0]}>
                <Debug />
                <Experience />
            </Physics>
        </Canvas>
        <App />
    </>
);
