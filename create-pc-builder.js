const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = 'pc-builder-quiz';

// Step 1: Create React App
console.log('Creating React app...');
execSync(`npx create-react-app ${projectName}`, { stdio: 'inherit' });

// Step 2: Change directory
process.chdir(projectName);

// Step 3: Install react-router-dom
console.log('Installing react-router-dom...');
execSync(`npm install react-router-dom`, { stdio: 'inherit' });

// Step 4: Create components folder
const componentsDir = path.join('src', 'components');
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir);

// Step 5: Write files
const files = {
  'src/App.jsx': `
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LotsGrid from "./components/LotsGrid";
import QuestionPage from "./components/QuestionPage";
import Summary from "./components/Summary";

function App() {
  const [selectedLots, setSelectedLots] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LotsGrid selectedLots={selectedLots} setSelectedLots={setSelectedLots} />} />
        <Route path="/lot/:lotId" element={<QuestionPage selectedLots={selectedLots} setSelectedLots={setSelectedLots} />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
  `,
  'src/index.js': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  `,
  'src/components/LotsGrid.jsx': `
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LotsGrid({ selectedLots, setSelectedLots }) {
  const navigate = useNavigate();
  const lots = Array.from({ length: 16 }, (_, i) => \`Lot \${i + 1}\`);

  const handleClick = (lot) => {
    if (!selectedLots.includes(lot)) {
      setSelectedLots([...selectedLots, lot]);
      navigate(\`/lot/\${lot}\`);
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
  `,
  'src/components/QuestionPage.jsx': `
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuestionPage({ selectedLots, setSelectedLots }) {
  const { lotId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(50);
  const [answer, setAnswer] = useState("");

  const questions = {
    "Lot 1": "Which component is responsible for processing data?",
    "Lot 2": "Which part powers the PC?",
    "Lot 3": "Which component stores your data?",
    "Lot 4": "Which component generates graphics?",
    // Add more lots if needed
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
    </div>
  );
}
  `,
  'src/components/Summary.jsx': `
import React from "react";

export default function Summary() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Game Summary</h2>
      <p>All lots you selected have been completed.</p>
    </div>
  );
}
  `
};

// Write all files
for (const [filePath, content] of Object.entries(files)) {
  fs.writeFileSync(filePath, content.trim());
}

console.log("Project created successfully! Run 'npm start' inside the project folder.");
