import React, { useState } from "react";
import "./App.css";

// === Import Images ===
import motherboardImg from "./assets/motherboard.jpg";
import vrmImg from "./assets/vrm.jpg";
import northbridgeImg from "./assets/northbridge.jpg";
import southbridgeImg from "./assets/southbridge.jpg";
import biosImg from "./assets/bios.jpg";

// === Draggable Chipsets ===
const partsList = [
  { id: "vrm", name: "VRM", img: vrmImg },
  { id: "northbridge", name: "Northbridge", img: northbridgeImg },
  { id: "southbridge", name: "Southbridge", img: southbridgeImg },
  { id: "bios", name: "BIOS Chip", img: biosImg },
];

// === Drop Zone Coordinates ===
const slotPositions = {
  vrm: { top: "40px", left: "180px" },
  northbridge: { top: "120px", left: "220px" },
  southbridge: { top: "250px", left: "260px" },
  bios: { top: "300px", left: "100px" },
};

const App = () => {
  const [placedParts, setPlacedParts] = useState({});
  const [score, setScore] = useState(null);

  const handleDragStart = (e, partId) => {
    e.dataTransfer.setData("partId", partId);
  };

  const handleDrop = (e, slot) => {
    e.preventDefault();
    const partId = e.dataTransfer.getData("partId");
    setPlacedParts((prev) => ({ ...prev, [slot]: partId }));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = () => {
    let marks = 0;
    const correctSlots = {
      vrm: "vrm",
      northbridge: "northbridge",
      southbridge: "southbridge",
      bios: "bios",
    };

    Object.keys(correctSlots).forEach((slot) => {
      if (placedParts[slot] === correctSlots[slot]) marks += 25;
      else if (placedParts[slot]) marks -= 5; // penalty for wrong placement
    });

    setScore(marks);
  };

  return (
    <div className="container">
      {/* Parts Panel */}
      <div className="parts-panel">
        <h2>Available Chipsets</h2>
        {partsList.map((part) => (
          <div
            key={part.id}
            className="part-item"
            draggable
            onDragStart={(e) => handleDragStart(e, part.id)}
          >
            <img src={part.img} alt={part.name} />
            <div>{part.name}</div>
          </div>
        ))}
      </div>

      {/* Motherboard Panel */}
      <div className="motherboard-panel">
        <h2>Match Motherboard Chipsets</h2>
        <div className="motherboard-container" style={{ position: "relative" }}>
          <img src={motherboardImg} alt="Motherboard" className="motherboard" />
          {Object.keys(slotPositions).map((slot) => (
            <div
              key={slot}
              className="slot"
              style={{
                position: "absolute",
                top: slotPositions[slot].top,
                left: slotPositions[slot].left,
                width: "60px",
                height: "60px",
                border: "2px dashed #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onDrop={(e) => handleDrop(e, slot)}
              onDragOver={handleDragOver}
            >
              {placedParts[slot] && (
                <img
                  src={partsList.find((p) => p.id === placedParts[slot]).img}
                  alt={slot}
                  style={{ width: "50px", height: "50px" }}
                />
              )}
            </div>
          ))}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        {score !== null && <h3>Score: {score}</h3>}
      </div>
    </div>
  );
};

export default App;
