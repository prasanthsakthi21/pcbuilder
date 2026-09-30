import React, { useState } from "react";
import "./App.css";

// === Import Images ===
import portsImg from "./assets/port.jpg";
import mouseImg from "./assets/mouse.jpg";
import keyboardImg from "./assets/keyboard.jpg";
import monitorImg from "./assets/monitor.jpg";
import printerImg from "./assets/printer.jpg";
import speakerImg from "./assets/speaker.jpg";

// === Draggable Devices ===
const devicesList = [
  { id: "mouse", name: "Mouse", img: mouseImg },
  { id: "keyboard", name: "Keyboard", img: keyboardImg },
  { id: "monitor", name: "Monitor", img: monitorImg },
  { id: "printer", name: "Printer", img: printerImg },
  { id: "speaker", name: "Speaker", img: speakerImg },
];

// === Drop Zone Positions ===
const slotPositions = {
  mouse: { top: "60px", left: "80px", port: "usb1" },
  keyboard: { top: "60px", left: "180px", port: "usb2" },
  monitor: { top: "60px", left: "280px", port: "hdmi" },
  speaker: { top: "60px", left: "380px", port: "audio" },
  printer: { top: "60px", left: "480px", port: "usb3" },
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
      mouse: "mouse", // USB
      keyboard: "keyboard", // USB
      monitor: "monitor", // HDMI
      speaker: "speaker", // Audio Jack
      printer: "printer", // USB
    };

    Object.keys(correctSlots).forEach((slot) => {
      if (placedParts[slot] === correctSlots[slot]) marks += 20;
      else if (placedParts[slot]) marks -= 5;
    });

    setScore(marks);
  };

  return (
    <div className="container">
      {/* Devices Panel */}
      <div className="parts-panel">
        <h2>Available Devices</h2>
        {devicesList.map((dev) => (
          <div
            key={dev.id}
            className="part-item"
            draggable
            onDragStart={(e) => handleDragStart(e, dev.id)}
          >
            <img src={dev.img} alt={dev.name} />
            <div>{dev.name}</div>
          </div>
        ))}
      </div>

      {/* Ports Panel */}
      <div className="motherboard-panel">
        <h2>Match Ports to Devices</h2>
        <div className="motherboard-container">
          <img src={portsImg} alt="Ports" className="motherboard" />
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
                  src={devicesList.find((d) => d.id === placedParts[slot]).img}
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
