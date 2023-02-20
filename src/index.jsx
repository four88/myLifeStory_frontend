import "./style.css";
import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import { Physics, Debug } from "@react-three/rapier";
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
            <Suspense>
                <Physics gravity={[0, -9.81, 0]}>
                    <Debug />
                    <Experience />
                </Physics>
            </Suspense>
        </Canvas>

        <App />
    </>
);
