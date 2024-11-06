import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./font-awesome/css/font-awesome.min.css";
import About from "./components/About";
import Show from "./pages/Showcase";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Show />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
