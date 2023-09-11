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

function App() {
  console.log();
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
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
            </>
          }
        />
        <Route
          path="/conclave"
          element={
            <>
              <Navbar />
              <Conclave />
            </>
          }
        />
        <Route
          path="/symposium"
          element={
            <>
              <Navbar />
              <Symposium />
            </>
          }
        />
        <Route
          path="/tech-expo"
          element={
            <>
              <Navbar />
              <TechExpo />
            </>
          }
        />
        <Route
          path="/sponsors"
          element={
            <>
              <Navbar />
              <Sponsors />
            </>
          }
        />
        <Route
          path="/women-in-tech"
          element={
            <>
              <Navbar />
              <WIT />
            </>
          }
        />
        <Route path="/register/:event" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
