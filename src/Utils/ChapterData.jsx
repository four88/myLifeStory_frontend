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
    thumbNail:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    page: [
      {
        no: 1,
        pageImg:
          "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        story:
          "Once upon a time, there was a young girl named Sarah who lived in a small village in the countryside. She loved spending her days wandering through the fields and forests, exploring the natural world around her. One day, while she was out on a walk, she stumbled upon an old, abandoned cabin in the woods. As she approached the cabin, she heard strange noises coming from inside.",
      },
      {
        no: 2,
        pageImg:
          "https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2890&q=80",
        story:
          "Curiosity getting the better of her, Sarah cautiously entered the cabin, and was surprised to find a magical book lying on a dusty old table. The book was bound in leather and glimmered in the dim light of the cabin. Sarah picked up the book and began to read, and as she did, she felt an inexplicable power surge through her body.",
      },
    ],
    position: getRandomPosition(),
  },
  {
    id: 2,
    no: "2",
    name: "Friends",
    thumbNail:
      "https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    position: getRandomPosition(),
    page: [
      {
        no: 1,
        pageImg:
          "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",

        story:
          "The book turned out to be a powerful grimoire, filled with ancient spells and incantations. Sarah spent many long hours poring over the book, studying its secrets and experimenting with its magic. Over time, she became a powerful sorceress, feared and respected by all who knew her.",
      },
      {
        no: 2,
        pageImg:
          "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        story:
          "But with great power came great responsibility, and Sarah knew that she could not use her magic for personal gain. Instead, she used it to help those in need, healing the sick, protecting the innocent, and fighting against the forces of darkness that threatened her village.",
      },
    ],
  },
  {
    id: 3,
    no: "3",
    name: "High-school",
    thumbNail:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3272&q=80",
    position: getRandomPosition(),
    page: [
      {
        no: 1,
        pageImg:
          "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3864&q=80",
        story:
          "The book turned out to be a powerful grimoire, filled with ancient spells and incantations. Sarah spent many long hours poring over the book, studying its secrets and experimenting with its magic. Over time, she became a powerful sorceress, feared and respected by all who knew her.",
      },
      {
        no: 2,
        pageImg:
          "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3864&q=80",
        story:
          "But with great power came great responsibility, and Sarah knew that she could not use her magic for personal gain. Instead, she used it to help those in need, healing the sick, protecting the innocent, and fighting against the forces of darkness that threatened her village.",
      },
    ],
  },
  {
    id: 4,
    no: "4",
    name: "University",
    thumbNail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80",
    position: getRandomPosition(),
    page: [
      {
        no: 1,
        pageImg:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        story:
          "The book turned out to be a powerful grimoire, filled with ancient spells and incantations. Sarah spent many long hours poring over the book, studying its secrets and experimenting with its magic. Over time, she became a powerful sorceress, feared and respected by all who knew her.",
      },
      {
        no: 2,
        pageImg:
          "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        story:
          "But with great power came great responsibility, and Sarah knew that she could not use her magic for personal gain. Instead, she used it to help those in need, healing the sick, protecting the innocent, and fighting against the forces of darkness that threatened her village.",
      },
    ],
  },
  {
    id: 5,
    no: "5",
    name: "Home",
    thumbNail:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    position: getRandomPosition(),
    page: [
      {
        no: 1,
        pageImg:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2784&q=80",
        story:
          "The book turned out to be a powerful grimoire, filled with ancient spells and incantations. Sarah spent many long hours poring over the book, studying its secrets and experimenting with its magic. Over time, she became a powerful sorceress, feared and respected by all who knew her.",
      },
      {
        no: 2,
        pageImg:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        story:
          "But with great power came great responsibility, and Sarah knew that she could not use her magic for personal gain. Instead, she used it to help those in need, healing the sick, protecting the innocent, and fighting against the forces of darkness that threatened her village.",
      },
    ],
  },
];
