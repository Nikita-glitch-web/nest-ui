import React from "react";
import "./App.css";
import { CryptoPrice } from "./components/CryptoPrice";

function App() {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <CryptoPrice />
    </div>
  );
}

export default App;
