import React, { useState } from "react";
import "./MatchComponents.css";

const components = [
  { id: "cpu", label: "CPU" },
  { id: "gpu", label: "GPU" },
  { id: "ram", label: "RAM" },
  { id: "ssd", label: "SSD" },
];

const functions = {
  cpu: "Processing",
  gpu: "Graphics",
  ram: "Temporary Storage",
  ssd: "Permanent Storage",
};

export default function MatchComponents() {
  const [matches, setMatches] = useState({});
  const [message, setMessage] = useState("");

  const handleDrop = (e, functionLabel) => {
    const componentId = e.dataTransfer.getData("text");
    const correctFunction = functions[componentId];

    if (correctFunction === functionLabel) {
      setMatches((prev) => ({ ...prev, [componentId]: functionLabel }));
      setMessage(`✅ Correct match: ${componentId.toUpperCase()} → ${functionLabel}`);
    } else {
      setMessage(`❌ Incorrect match: ${componentId.toUpperCase()} → ${functionLabel}`);
    }
  };

  const handleDragStart = (e, componentId) => {
    e.dataTransfer.setData("text", componentId);
  };

  const resetGame = () => {
    setMatches({});
    setMessage("");
  };

  return (
    <div className="match-container">
      <h2>🧩 Match PC Components to Their Function</h2>
      <div className="columns">
        <div className="left">
          <h3>🔧 Components</h3>
          {components.map((comp) => (
            <div
              key={comp.id}
              draggable
              onDragStart={(e) => handleDragStart(e, comp.id)}
              className={`component ${matches[comp.id] ? "matched" : ""}`}
            >
              {comp.label}
            </div>
          ))}
        </div>
        <div className="right">
          <h3>🧠 Functions</h3>
          {Object.values(functions).map((func, index) => (
            <div
              key={index}
              className="dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, func)}
            >
              {func}
            </div>
          ))}
        </div>
      </div>
      <p className="message">{message}</p>
      <button onClick={resetGame}>🔄 Reset</button>
    </div>
  );
}
