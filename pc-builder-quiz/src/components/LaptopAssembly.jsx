// LaptopAssembly.jsx
import React, { useState } from "react";

// Using placeholder images since local files are not supported
import laptopImg from "./image/laptop.jpg";
import ramImg from "./image/64gb ddr5.png";
import ssdImg from "./image/1TB SSD.png";
import wifiImg from "./image/wifi.png";
import batteryImg from "./image/battery.jpg";

const partsList = [
  { id: "ram", name: "RAM", img: ramImg },
  { id: "ssd", name: "SSD", img: ssdImg },
  { id: "wifi", name: "Wi-Fi Card", img: wifiImg },
  { id: "battery", name: "Battery", img: batteryImg },
];

const slotPositions = {
  ram: { top: "80px", left: "200px" },
  ssd: { top: "180px", left: "200px" },
  wifi: { top: "180px", left: "350px" },
  battery: { top: "300px", left: "150px" },
};

export default function LaptopAssembly() {
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
      ram: "ram",
      ssd: "ssd",
      wifi: "wifi",
      battery: "battery",
    };
    Object.keys(correctSlots).forEach((slot) => {
      if (placedParts[slot] === correctSlots[slot]) marks += 25;
      else marks -= 5;
    });
    setScore(marks);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", fontFamily: "sans-serif" }}>
      {/* Parts Panel */}
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "45%" }}>
        <h2>Available Parts</h2>
        {partsList.map((part) => (
          <div
            key={part.id}
            style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", cursor: "grab", textAlign: "center" }}
            draggable
            onDragStart={(e) => handleDragStart(e, part.id)}
          >
            <img src={part.img} alt={part.name} style={{ width: "100%", height: "auto" }} />
            <div style={{ marginTop: "5px" }}>{part.name}</div>
          </div>
        ))}
      </div>

      {/* Laptop Panel */}
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "45%", position: "relative" }}>
        <h2>Laptop Assembly</h2>
        <div style={{ position: "relative" }}>
          <img src={laptopImg} alt="Laptop" style={{ width: "100%", height: "auto" }} />
          {Object.keys(slotPositions).map((slot) => (
            <div
              key={slot}
              style={{
                position: "absolute",
                top: slotPositions[slot].top,
                left: slotPositions[slot].left,
                width: "60px",
                height: "40px",
                border: "2px dashed #999",
                borderRadius: "5px",
              }}
              onDrop={(e) => handleDrop(e, slot)}
              onDragOver={handleDragOver}
            >
              {placedParts[slot] && (
                <img
                  src={partsList.find((p) => p.id === placedParts[slot]).img}
                  alt={slot}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
        <button onClick={handleSubmit} style={{ marginTop: "15px", padding: "10px 20px", fontSize: "16px", cursor: "pointer", width: "100%" }}>
          Submit
        </button>
        {score !== null && <h3 style={{ textAlign: "center", marginTop: "10px" }}>Score: {score}</h3>}
      </div>
    </div>
  );
}