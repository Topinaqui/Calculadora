import React from "react";
import "./styles.css";

import CalculadoraFinanceira from "./components/CalculadoraFinanceira/CalculadoraFinanceira";

export default function App() {
  return (
    <div className="App">
      <h1>Financial Calculator</h1>
      <CalculadoraFinanceira />
    </div>
  );
}
