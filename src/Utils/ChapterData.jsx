import * as THREE from "three";

const usedPositions = [];
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomPosition = () => {
  let position;
  do {
    position = new THREE.Vector3(getRandomInt(25), 0.5, getRandomInt(25));
  } while (usedPositions.some((p) => p.distanceTo(position) < 1));
  usedPositions.push(position);
  return position;
};

export const ChapterData = [
  {
    id: 1,
    no: "1",
    name: "Family",
    img: "",
    story: "",
    position: getRandomPosition(),
  },
  {
    id: 2,
    no: "2",
    name: "Friends",
    img: "",
    story: "",
    position: getRandomPosition(),
  },
  {
    id: 3,
    no: "3",
    name: "High-school",
    img: "",
    story: "",
    position: getRandomPosition(),
  },
  {
    id: 4,
    no: "4",
    name: "University",
    img: "",
    story: "",
    position: getRandomPosition(),
  },
  {
    id: 5,
    no: "5",
    name: "Home",
    img: "",
    story: "",
    position: getRandomPosition(),
  },
];
