import React from "react";
import HomePage from "./Pages/HomePage";
import { isMobileOnly } from "react-device-detect";
import "./App.css";
import MobilePage from "./Pages/MobilePage";

function App() {
  return (
    <div className="App">{isMobileOnly ? <MobilePage /> : <HomePage />}</div>
  );
}

export default App;
