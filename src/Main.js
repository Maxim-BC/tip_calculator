import React, { Component } from "react";

class Main extends Component {
  state = {
    invoiceAmount: "",
    qualityService: "",
    numberPeople: "",
    tips: "___",
    totalSum: "___"
  };

  invoiceAmountChange = (event) => {
    this.setState({ invoiceAmount: event.target.value });
  };
  qualityServiceChange = (event) => {
    this.setState({ qualityService: event.target.value });
  };
  numberPeopleChange = (event) => {
    this.setState({ numberPeople: event.target.value });
  };
  handleDefault = (event) => {
    this.setState({
      invoiceAmount: "",
      qualityService: "",
      numberPeople: "",
      tips: "___",
      totalSum: "___"
    });
  };
  handleSubmit = (evt) => {
    const { invoiceAmount, qualityService, numberPeople } = this.state;
    evt.preventDefault();
    let numInvoiceAmount = Number(invoiceAmount);
    let numNumberPeople = Number(numberPeople);
    let numQualityService = Number(qualityService);

    let tipsResult = (
      ((numInvoiceAmount / numNumberPeople) * numQualityService) /
      100
    ).toFixed(2);

    let totalSumResult = (
      numInvoiceAmount / numNumberPeople +
      Number(tipsResult)
    ).toFixed(2);
    this.setState({
      tips: tipsResult,
      totalSum: totalSumResult
    });
  };

  render() {
    return (
      <form className="main-content" onSubmit={this.handleSubmit}>
        <p>Сумма по счету</p>
        <label>
          <input
            onChange={this.invoiceAmountChange}
            type="number"
            value={this.state.invoiceAmount}
            required
            min="1"
            step="0.01"
          />
        </label>
        <p>Качество обслуживания</p>
        <label>
          <select
            defaultValue=""
            onChange={this.qualityServiceChange}
            value={this.state.qualityService}
            required
          >
            <option value="" disabled>
              Качество обслуживания
            </option>
            <option value="0">Плохое (0%)</option>
            <option value="5">Нормальное (5%)</option>
            <option value="10">Хорошее (10%)</option>
            <option value="15">Отличное (15%)</option>
          </select>
        </label>
        <p>Количество человек</p>
        <label>
          <input
            onChange={this.numberPeopleChange}
            type="number"
            value={this.state.numberPeople}
            min="1"
            required
          />
        </label>
        <div className="box-btn">
          <button className="btn-calc">Посчитать</button>
          <button
            className="btn-clear"
            type="button"
            onClick={this.handleDefault}
          >
            Сбросить
          </button>
        </div>
        <div className="box-tips">
          <p className="text-tips">Чаевые: {this.state.tips} ₽</p>
          <p className="comments-one">(с каждого)</p>
        </div>
        <div className="box-total">
          <p className="text-total">Всего: {this.state.totalSum} ₽</p>
          <p className="comments-two">(с каждого)</p>
        </div>
      </form>
    );
  }
}

export default Main;
