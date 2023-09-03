import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Conclave from "./components/Conclave";
import Symposium from "./components/Symposium";
import TechExpo from "./components/TechExpo";
import Sponsors from "./components/Sponsors";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/conclave" element={<Conclave />} />
        <Route path="/symposium" element={<Symposium />} />
        <Route path="/tech-expo" element={<TechExpo />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </>
  );
}

export default App;
