import "./App.css";
import Blue from "./Components/blue";
import Home from "./Components/home";
import Red from "./Components/Red";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
