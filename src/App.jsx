import React, { useState } from "react";

export default function App() {
  const imgs = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
  ];

  const alts = [
    "Closeup of a human eye",
    "Rock that looks like a wave",
    "Purple and white pansies",
    "Section of wall from a pharoah's tomb",
    "Large moth on a leaf",
  ];

  const [image, setImage] = useState(imgs[0]);
  const [alt, setAlt] = useState(alts[0]);
  const [overlay, setOverlay] = useState(false);

  const darken = () => {
    setOverlay(!overlay);
  };

  const fullImage = (key) => {
    setImage(imgs[key]);
    setAlt(alts[key]);
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img src={image} alt={alt} />

        <div
          className="overlay"
          style={{
            background: overlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0) ",
          }}
        ></div>

        <button onClick={darken}> {overlay ? "Lighten" : "Darken"} </button>
      </div>

      <div className="thumb-bar">
        {imgs.map((img, index) => {
          return (
            <img
              key={img}
              src={img}
              alt={alts[index]}
              onClick={() => fullImage(index)}
              // () => アロー関数にして無限ループを避ける
            />
          );
        })}
      </div>
    </>
  );
}
