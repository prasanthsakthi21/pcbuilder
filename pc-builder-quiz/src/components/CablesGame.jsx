// CablesGame.jsx
import React, { useState, useEffect } from "react";
import usbCImg from "./image/usb-c.jpg";
import displayPortImg from "./image/displayport.jpg";
import ethernetImg from "./image/ethernet.jpg";
import hdmiImg from "./image/hdmi.jpg";
import audioImg from "./image/audio.jpg";
import powerImg from "./image/power.jpg";

import backPanelImg from "./image/backpanel.jpg";

const cablesList = [
  { id: "usbC", name: "USB-C", img: usbCImg },
  { id: "displayPort", name: "DisplayPort", img: displayPortImg },
  { id: "ethernet", name: "Ethernet", img: ethernetImg },
  { id: "hdmi", name: "HDMI", img: hdmiImg },
  { id: "audio", name: "Audio Jack", img: audioImg },
  { id: "power", name: "Power Cable", img: powerImg },
];

const dropZones = {
  usb: { label: "USB-C Port", position: { top: "10%", left: "20%" } },
  dp: { label: "DisplayPort", position: { top: "10%", left: "40%" } },
  eth: { label: "Ethernet Port", position: { top: "40%", left: "10%" } },
  hdmi: { label: "HDMI Port", position: { top: "40%", left: "40%" } },
  audioPort: { label: "Audio Jack", position: { top: "70%", left: "10%" } },
  powerPort: { label: "Power Input", position: { top: "70%", left: "40%" } },
};

export default function CablesGame() {
  const [placedCables, setPlacedCables] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(50);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop at 0
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleDragStart = (e, cableId) => {
    e.dataTransfer.setData("cableId", cableId);
  };

  const handleDrop = (e, slot) => {
    e.preventDefault();
    const cableId = e.dataTransfer.getData("cableId");
    setPlacedCables((prev) => ({ ...prev, [slot]: cableId }));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = () => {
    let marks = 0;
    const correctMapping = {
      usb: "usbC",
      dp: "displayPort",
      eth: "ethernet",
      hdmi: "hdmi",
      audioPort: "audio",
      powerPort: "power",
    };
    Object.keys(correctMapping).forEach((slot) => {
      if (placedCables[slot] === correctMapping[slot]) {
        marks += 15;
      } else if (placedCables[slot]) {
        marks -= 5;
      }
    });
    setScore(marks);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {/* Timer */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Time Left: {timeLeft} sec</h2>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* Left panel: Cables */}
        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "30%" }}>
          <h2>Available Cables</h2>
          {cablesList.map((cable) => (
            <div
              key={cable.id}
              draggable
              onDragStart={(e) => handleDragStart(e, cable.id)}
              style={{
                marginBottom: "10px",
                padding: "5px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                cursor: "grab",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={cable.img} alt={cable.name} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
            </div>
          ))}
        </div>

        {/* Right panel: Back panel */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            width: "60%",
            position: "relative",
            backgroundImage: `url(${backPanelImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        >
          {Object.keys(dropZones).map((slot) => (
            <div
              key={slot}
              onDrop={(e) => handleDrop(e, slot)}
              onDragOver={handleDragOver}
              style={{
                position: "absolute",
                top: dropZones[slot].position.top,
                left: dropZones[slot].position.left,
                width: "80px",
                height: "80px",
                border: "2px dashed #666",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: "#333",
              }}
            >
              {placedCables[slot] ? (
                <img
                  src={cablesList.find((c) => c.id === placedCables[slot]).img}
                  alt={slot}
                  style={{ width: "60px", height: "60px", objectFit: "contain" }}
                />
              ) : (
                dropZones[slot].label
              )}
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px 20px",
            }}
          >
            Submit
          </button>

          {score !== null && (
            <h3
              style={{
                position: "absolute",
                bottom: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Score: {score}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
