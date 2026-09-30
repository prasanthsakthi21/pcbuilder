// Questionpage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AssemblyGame from "./AssemblyGame"; // The original PC assembly game
import LaptopAssembly from "./LaptopAssembly"; // The new laptop assembly game
import CablesGame from "./CablesGame"; // The new cables game

export default function QuestionPage({ selectedLots, setSelectedLots }) {
  const { lotId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(50);
  const [answer, setAnswer] = useState("");

  const questions = {
    "Lot 1": "Complete the PC assembly task by dragging and dropping the correct power cables.",
    "Lot 2": "Drag and drop the components to assemble the laptop.",
    "Lot 3": "Which component stores your data?",
    "Lot 4": "Which component generates graphics?",
  };
  const question = questions[lotId] || "Answer the PC assembling question.";

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{lotId} - Question</h2>
      {lotId === "Lot 3" ? (
        <CablesGame />
      ) : lotId === "Lot 2" ? (
        <LaptopAssembly />
      ) : (
        <>
          <p>{question}</p>
          <p>Time Left: <strong>{timeLeft} sec</strong></p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ padding: "10px", fontSize: "16px", width: "100%", marginBottom: "15px" }}
            placeholder="Enter your answer"
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "10px",
              border: "2px solid #28a745",
              backgroundColor: "#28a745",
              color: "white",
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}