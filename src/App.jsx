import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [ukus, setUkUs] = useState("uk");
  const [name, setName] = useState("Bob");
  const [bakaStory, setBakaStory] = useState({
    xItem: "",
    yItem: "",
    zItem: "",
  });

  const xItems = ["Willy the Goblin", "Father Christmas", "Big Daddy"];
  const yItems = ["Disneyland", "kitchen", "White House"];
  const zItems = [
    "turned into a slug and crawled away",
    " spontaneously combusted",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.customname.value);
  };

  const handleTaniChange = (event) => {
    setUkUs(event.target.value);
  };

  const randomStory = () => {
    const randomXItem = xItems[Math.floor(Math.random() * xItems.length)];
    const randomYItem = yItems[Math.floor(Math.random() * yItems.length)];
    const randomZItem = zItems[Math.floor(Math.random() * zItems.length)];

    setBakaStory({
      xItem: randomXItem,
      yItem: randomYItem,
      zItem: randomZItem,
    });

    setShowStory(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" id="customname" />
        </form>
      </div>

      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          onChange={handleTaniChange}
          checked={ukus === "us"}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          onChange={handleTaniChange}
          checked={ukus === "uk"}
        />
      </div>

      <div>
        <button onClick={randomStory}>Generate random story</button>
      </div>

      {showStory && (
        <p>
          It was {ukus === "us" ? "94 fahrenheit" : "34 centigrade"}, so{" "}
          {bakaStory.xItem} went for a walk. When they got to {bakaStory.yItem},
          they stared in horror for a few moments, then {bakaStory.zItem}.{name}{" "}
          saw the whole thing, but was not surprised — {bakaStory.xItem} weighs{" "}
          {ukus === "us" ? "300 pounds" : "21 stone"}, and it was a hot day.
        </p>
      )}
    </>
  );
}
