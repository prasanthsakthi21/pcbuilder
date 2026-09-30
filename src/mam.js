
import React, { useState } from "react";
import "./App.css";
import motherboardImg from "./assets/motherboard.jpg";
import cpuImg from "./assets/cpu.jpg";
import ramImg from "./assets/ram.jpg";
import gpuImg from "./assets/gpu.jpg";
import psuImg from "./assets/psu.jpg";
import storageImg from "./assets/storage.jpg";

const partsList = [
  { id: "cpu", name: "CPU", img: cpuImg },
  { id: "ram", name: "RAM", img: ramImg },
  { id: "gpu", name: "GPU", img: gpuImg },
  { id: "psu", name: "PSU", img: psuImg },
  { id: "storage", name: "Storage", img: storageImg },
];

const slotPositions = {
  cpu: { top: "50px", left: "200px" },
  ram: { top: "50px", left: "350px" },
  gpu: { top: "200px", left: "200px" },
  psu: { top: "350px", left: "50px" },
  storage: { top: "350px", left: "350px" },
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
      cpu: "cpu",
      ram: "ram",
      gpu: "gpu",
      psu: "psu",
      storage: "storage",
    };
    Object.keys(correctSlots).forEach((slot) => {
      if (placedParts[slot] === correctSlots[slot]) marks += 20;
      else marks -= 5;
    });
    setScore(marks);
  };

  return (
    <div className="container">
      {/* Parts Panel */}
      <div className="parts-panel">
        <h2>Available Parts</h2>
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
        <h2>PC Assembly</h2>
        <div className="motherboard-container">
          <img src={motherboardImg} alt="Motherboard" className="motherboard" />
          {Object.keys(slotPositions).map((slot) => (
            <div
              key={slot}
              className="slot"
              style={{
                top: slotPositions[slot].top,
                left: slotPositions[slot].left,
              }}
              onDrop={(e) => handleDrop(e, slot)}
              onDragOver={handleDragOver}
            >
              {placedParts[slot] && (
                <img
                  src={partsList.find((p) => p.id === placedParts[slot]).img}
                  alt={slot}
                  className="placed-part"
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