// AssemblyGame.jsx
import React, { useState } from "react";
// Ensure you have these images in your project
import atx24Img from "./image/atx24.jpg";
import cpu8Img from "./image/cpu8.jpg";
import pcieImg from "./image/pcie.jpg";
import sataImg from "./image/sata.jpg";

import motherboardImg from "./image/motherboard.jpg";
import cpuSocketImg from "./image/cpu-socket.jpg";
import gpuImg from "./image/gpu.jpg";
import driveImg from "./image/sata-drive.jpg";

const partsList = [
  { id: "sata", name: "SATA Power", img: sataImg },
  { id: "atx24", name: "24-pin ATX", img: atx24Img },
  { id: "pcie", name: "6+2 PCIe", img: pcieImg },
  { id: "cpu8", name: "8-pin CPU", img: cpu8Img },
];

const dropZones = {
  motherboard: { label: "Motherboard (24-pin)", img: motherboardImg },
  cpu: { label: "CPU Power (8-pin)", img: cpuSocketImg },
  gpu: { label: "GPU (PCIe Power)", img: gpuImg },
  drive: { label: "SATA Drive Power", img: driveImg },
};

export default function AssemblyGame() {
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
    const correctMapping = {
      motherboard: "atx24",
      cpu: "cpu8",
      gpu: "pcie",
      drive: "sata",
    };
    Object.keys(correctMapping).forEach((slot) => {
      if (placedParts[slot] === correctMapping[slot]) {
        marks += 25;
      } else if (placedParts[slot]) {
        marks -= 5;
      }
    });
    setScore(marks);
  };

  return (
    <div className="container" style={{ display: "flex", justifyContent: "space-around", padding: "20px", fontFamily: "sans-serif" }}>
      <div className="parts-panel" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "45%" }}>
        <h2>PSU Connectors</h2>
        {partsList.map((part) => (
          <div
            key={part.id}
            className="part-item"
            draggable
            onDragStart={(e) => handleDragStart(e, part.id)}
            style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", cursor: "grab" }}
          >
            <img src={part.img} alt={part.name} style={{ width: "100%", height: "auto" }} />
            <div style={{ textAlign: "center", marginTop: "5px" }}>{part.name}</div>
          </div>
        ))}
      </div>

      <div className="dropzone-panel" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "45%" }}>
        <h2>Match to Correct Device</h2>
        <div className="dropzone-grid" style={{ display: "grid", gap: "10px" }}>
          {Object.keys(dropZones).map((slot) => (
            <div
              key={slot}
              className="dropzone"
              onDrop={(e) => handleDrop(e, slot)}
              onDragOver={handleDragOver}
              style={{ border: "2px dashed #999", padding: "10px", borderRadius: "5px", position: "relative" }}
            >
              <span className="zone-label" style={{ position: "absolute", top: "5px", left: "5px", fontSize: "12px", color: "#666" }}>
                {dropZones[slot].label}
              </span>
              <img
                src={dropZones[slot].img}
                alt={dropZones[slot].label}
                className="dropzone-img"
                style={{ width: "100%", height: "auto" }}
              />
              {placedParts[slot] && (
                <img
                  src={partsList.find((p) => p.id === placedParts[slot]).img}
                  alt={slot}
                  className="placed-part"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>

        <button className="submit-btn" onClick={handleSubmit} style={{ marginTop: "15px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          Submit
        </button>
        {score !== null && <h3 style={{ textAlign: "center" }}>Score: {score}</h3>}
      </div>
    </div>
  );
}