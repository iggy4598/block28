import "./App.css";
import blue from "./Components/blue";
import Home from "./Components/Home";
import Red from "./Components/Red";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <link to="/red">red</link>
        <link to="/blue">blue</link>
        <link to="/Home">home</link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<blue />} />
          <Route path="/red" element={<red />} />
          <Route path="/" element={<home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
