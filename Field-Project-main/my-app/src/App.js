import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homes";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gymkhana from "./pages/Gymkhana";
import Events from "./pages/Events";
import Library from "./pages/Library";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/library" element={<Library />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gymkhana" element={<Gymkhana />} />
    </Routes>
  );
}

export default App;
