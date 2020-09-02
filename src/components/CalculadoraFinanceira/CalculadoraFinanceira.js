import React, { Component } from "react";

import css from "./style/calculadora.module.css";

const JUROS_MENSAL = 1.0259;

class CalculadoraFinanceira extends Component {
  constructor() {
    super();

    this.state = {
      parcelas: [],
      total: 0
    };
  }

  createParcelas(valor = 0) {
    let maxParcelas = 12;
    let parcelas = [];
    let total = 0;

    while (maxParcelas >= 1) {
      let parcela = {};
      let parcelaSimples = valor / maxParcelas;

      parcela.label = "Parcela " + maxParcelas;

      let calcValor =
        maxParcelas === 1 ? parcelaSimples : parcelaSimples * JUROS_MENSAL;
      parcela.valor = +calcValor.toFixed(2);
      maxParcelas--;

      total += parcela.valor;

      parcelas.push(parcela);
    }

    this.setState({ total, parcelas: parcelas.reverse() });
  }

  handleValor(target) {
    let valor = target.value || 0;

    if (valor > 0) {
      this.createParcelas(valor);
    } else {
      this.reset();
    }
  }

  reset() {
    this.setState({ parcelas: [], total: 0 });
  }

  render() {
    const { parcelas, total } = this.state;
    return (
      <div className={css.calculadoraFinanceira}>
        <div>
          <label htmlFor="valor">Valor a financiar:</label>
          <input
            id="valor"
            type="text"
            onInput={({ target }) => this.handleValor(target)}
          />
        </div>
        <div>
          <label htmlFor="parcelas">Parcelas:</label>
          <select id="parcelas">
            {parcelas.map((parcela, i) => (
              <option value={parcela.valor} key={`${parcela.label}_${i}`}>
                {parcela.label} - {parcela.valor}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Total de r$ {total}</p>
        </div>
      </div>
    );
  }
}

export default CalculadoraFinanceira;
