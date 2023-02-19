import { Sky, OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useInput } from "../hooks/useInput.jsx";
import { RigidBody, vec3 } from "@react-three/rapier";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ forward, backward, left, right }) => {
  var directionOffset = 0; // w

  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; // w+a
    } else if (right) {
      directionOffset = -Math.PI / 4; // w+d
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
    } else {
      directionOffset = Math.PI; //s
    }
  } else if (left) {
    directionOffset = Math.PI / 2;
  } else if (right) {
    directionOffset = -Math.PI / 2; // d
  }

  return directionOffset;
};

const PATH = "./model";

export default function Player() {
  const characterObj = useGLTF(`${PATH}/player.glb`);
  const { actions } = useAnimations(
    characterObj.animations,
    characterObj.scene
  );

  // physic
  const rigidRef = useRef();

  // input control

  const { forward, backward, left, right, jump, shift } = useInput();

  // shadow
  characterObj.scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
    }
  });

  const camera = useThree((state) => state.camera);

  const currentAction = useRef("");
  const controlsRef = useRef();

  const updateCameraTarget = (moveX, moveZ, position) => {
    // move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;

    // update camera target
    // cameraTarget.x = characterObj.scene.position.x;
    // cameraTarget.y = characterObj.scene.position.y + 2;
    // cameraTarget.z = characterObj.scene.position.z;
    cameraTarget.x = position.x;
    cameraTarget.y = position.y + 1;
    cameraTarget.z = position.z;

    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  };

  useEffect(() => {
    let action = "";

    if (forward || backward || left || right) {
      action = "walking";
      if (shift) {
        action = "running";
      }
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, shift, jump]);

  useFrame((state, delta) => {
    const position = vec3(rigidRef.current.translation());

    if (
      currentAction.current == "running" ||
      currentAction.current == "walking"
    ) {
      // calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        // camera.position.x - characterObj.scene.position.x,
        // camera.position.z - characterObj.scene.position.z
        camera.position.x - position.x,
        camera.position.z - position.z
      );

      // diagonal movement angle offset
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      characterObj.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      // calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      // run/walk velocity
      const velocity = currentAction.current == "running" ? 10 : 5;

      // move model and camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      // characterObj.scene.position.x += moveX;
      // characterObj.scene.position.z += moveZ;
      position.x += moveX;
      position.z += moveZ;
      updateCameraTarget(moveX, moveZ, position);

      // update RigidBody's position
      rigidRef.current.setTranslation(position, true);
    }
  });

  return (
    <>
      <OrbitControls ref={controlsRef} />
      <Sky />
      <RigidBody
        ref={rigidRef}
        type="dynamic"
        colliders="ball"
        position={[0, -1, 0]}
        mass={10}
        angularDamping={100.0}
        inertia={[100, 100, 100]}
        linearDamping={100.0}
      >
        <primitive object={characterObj.scene} position={[0, 0, 0]} />
      </RigidBody>
    </>
  );
}
