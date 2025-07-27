
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Laws from "./pages/Laws";
import LawDetail from "./pages/LawDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/laws/:id" element={<LawDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
