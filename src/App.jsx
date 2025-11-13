import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
          <Route path="/case-study" element={<CaseStudyDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
