import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Conclave from "./components/Conclave";
import Symposium from "./components/Symposium";
import TechExpo from "./components/Tech_Expo";
import Sponsors from "./components/Sponsors";
import WIT from "./components/WIT";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import HTR from "./components/HTR";
import Gallery from "./components/Gallery";
import { Routes, Route } from "react-router-dom";
import RobowarsReg from "./RegistrationPages/RobowarsReg";
import BrainwizReg from "./RegistrationPages/BrainwizReg"
import YTTReg from "./RegistrationPages/YTTReg"
import DriftReg from "./RegistrationPages/DriftReg"
import SRReg from "./RegistrationPages/SRReg"
import DcodeReg from "./RegistrationPages/DcodeReg"
import INReg from "./RegistrationPages/INReg"
import DRAReg from "./RegistrationPages/DRAReg"

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
        <Route path="/register/robowars" element={<RobowarsReg />} />
        <Route path="/register/brainwiz" element={<BrainwizReg />} />
        <Route path="/register/youth tech-tic" element={<YTTReg />} />
        <Route path="/register/drift-racing" element={<DriftReg />} />
        <Route path="/register/stockrush" element={<SRReg />} />
        <Route path="/register/dcode" element={<DcodeReg />} />
        <Route path="/register/innovation-nexus" element={<INReg />} />
        <Route path="/register/dra" element={<DRAReg />} />
      </Routes>
    </>
  );
}

export default App;
