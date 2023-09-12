import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Conclave from "./components/Conclave";
import Symposium from "./components/Symposium";
import TechExpo from "./components/TechExpo";
import Sponsors from "./components/Sponsors";
import WIT from "./components/WIT";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import HTR from "./components/HTR";
import Gallery from "./components/Gallery";
import { Routes, Route } from "react-router-dom";
import Register from "./RegistrationPages/Register";
import BrainwizReg from "./RegistrationPages/BrainwizReg"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/events-23"
          element={
            <>
              <Navbar />
              <Events />
            </>
          }
        />
        <Route
          path="/conclave-23"
          element={
            <>
              <Navbar />
              <Conclave />
            </>
          }
        />
        <Route
          path="/symposium-23"
          element={
            <>
              <Navbar />
              <Symposium />
            </>
          }
        />
        <Route
          path="/tech-expo-23"
          element={
            <>
              <Navbar />
              <TechExpo />
            </>
          }
        />
        <Route
          path="/sponsors-23"
          element={
            <>
              <Navbar />
              <Sponsors />
            </>
          }
        />
        <Route
          path="/women-in-tech-23"
          element={
            <>
              <Navbar />
              <WIT />
            </>
          }
        />
        <Route
          path="/about-23"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="team-23"
          element={
            <>
              <Navbar />
              <OurTeam />
            </>
          }
        />
        <Route
          path="/how-to-reach-23"
          element={
            <>
              <Navbar />
              <HTR />
            </>
          }
        />
        <Route
          path="/gallery-23"
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          }
        />
        <Route path="/register/brainwiz" element={<BrainwizReg />} />
        <Route path="/register/:event" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
