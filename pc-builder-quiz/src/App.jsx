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