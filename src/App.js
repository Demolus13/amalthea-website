import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Conclave from "./components/Conclave";
import Symposium from "./components/Symposium";
import TechExpo from "./components/TechExpo";
import Sponsors from "./components/Sponsors";
import WIT from "./components/WIT";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import BrainwizReg from "./components/RegistrationPages/BrainwizReg"

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
        <Route path="/register/brainwiz" element={<BrainwizReg />} />
        <Route path="/register/:event" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
