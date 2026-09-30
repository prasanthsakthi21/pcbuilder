import React, { useState } from "react";
import "./App1.css";

// === Import Images ===
import pcieSlotImg from "./assets/pcie-slot.jpg";
import airGpuImg from "./assets/air-gpu.jpg";
import waterGpuImg from "./assets/water-gpu.jpg";
import passiveGpuImg from "./assets/passive-gpu.jpg";

// === Draggable GPUs ===
const gpuList = [
  { id: "air", name: "Air-cooled GPU", img: airGpuImg },
  { id: "water", name: "Water-cooled GPU", img: waterGpuImg },
  { id: "passive", name: "Passive GPU", img: passiveGpuImg },
];

// === Drop Slots ===
const gpuSlots = [
  { id: "slot1", name: "GPU PCIe Slot 1" },
  { id: "slot2", name: "GPU PCIe Slot 2" },
  { id: "slot3", name: "GPU PCIe Slot 3" },
];

const App1 = () => {
  const [placedGpus, setPlacedGpus] = useState({});
  const [score, setScore] = useState(null);

  const handleDragStart = (e, gpuId) => {
    e.dataTransfer.setData("gpuId", gpuId);
  };

  const handleDrop = (e, slotId) => {
    e.preventDefault();
    const gpuId = e.dataTransfer.getData("gpuId");
    setPlacedGpus((prev) => ({ ...prev, [slotId]: gpuId }));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = () => {
    let marks = 0;
    const correctPlacement = {
      slot1: "air",
      slot2: "water",
      slot3: "passive",
    };

    Object.entries(correctPlacement).forEach(([slot, correctId]) => {
      const placedId = placedGpus[slot];
      if (placedId === correctId) marks += 33;
      else if (placedId) marks -= 5;
    });

    setScore(Math.max(0, Math.min(marks, 100)));
  };

  const handleReset = () => {
    setPlacedGpus({});
    setScore(null);
  };

  return (
    <div className="container">
      {/* === GPU Selection Panel === */}
      <section className="gpu-panel">
        <h2>Available GPUs</h2>
        {gpuList.map(({ id, name, img }) => (
          <div
            key={id}
            className="gpu-item"
            draggable
            onDragStart={(e) => handleDragStart(e, id)}
            role="button"
            tabIndex="0"
          >
            <img src={img} alt={name} className="gpu-img" />
            <div>{name}</div>
          </div>
        ))}
      </section>

      {/* === PCIe Slot Panel === */}
      <section className="slots-panel">
        <h2>GPU PCIe Slots</h2>
        <div className="slots-container">
          {gpuSlots.map(({ id, name }) => (
            <div
              key={id}
              className="drop-slot"
              onDrop={(e) => handleDrop(e, id)}
              onDragOver={handleDragOver}
              style={{
                backgroundImage: `url(${pcieSlotImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              aria-label={`Drop zone for ${name}`}
            >
              {placedGpus[id] && (
                <img
                  src={gpuList.find((g) => g.id === placedGpus[id]).img}
                  alt={`Placed ${placedGpus[id]} GPU`}
                  className="placed-gpu"
                />
              )}
            </div>
          ))}
        </div>

        {/* === Controls === */}
        <div className="button-group">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
         
        </div>

        {/* === Score Display === */}
        {score !== null && (
          <div className="score-display">
            <h3>Score: {score}</h3>
            <p>
              {score === 99
                ? "Perfect match! 🔥"
                : score > 60
                ? "Good job! 👍"
                : "Try again for a better score."}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default App1;