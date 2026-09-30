import React from "react";
import { useNavigate } from "react-router-dom";

export default function LotsGrid({ selectedLots, setSelectedLots }) {
  const navigate = useNavigate();
  const lots = Array.from({ length: 20 }, (_, i) => `Lot ${i + 1}`);

  const handleClick = (lot) => {
    if (!selectedLots.includes(lot)) {
      setSelectedLots([...selectedLots, lot]);
      navigate(`/lot/${lot}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Select a Lot</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
      }}>
        {lots.map((lot) => (
          <button
            key={lot}
            onClick={() => handleClick(lot)}
            disabled={selectedLots.includes(lot)}
            style={{
              padding: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: selectedLots.includes(lot) ? "not-allowed" : "pointer",
              borderRadius: "10px",
              border: "2px solid #007bff",
              backgroundColor: selectedLots.includes(lot) ? "#6c757d" : "#007bff",
              color: "white",
              transition: "all 0.3s ease",
            }}
          >
            {lot}
          </button>
        ))}
      </div>
    </div>
  );
}