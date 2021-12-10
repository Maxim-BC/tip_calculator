import React from "react";
import { observer } from "mobx-react";
// import { runInAction } from "mobx";
import { calculatorStoreFunction } from "../stores";

const store = calculatorStoreFunction();

const Main = observer((props) => {
  return (
    <form className="main-content" onSubmit={store.handleSubmit}>
      <p>Сумма по счету</p>
      <label>
        <input
          onChange={store.invoiceAmountChange}
          type="number"
          value={store.invoiceAmount}
          required
          min="1"
          step="0.01"
        />
      </label>
      <p>Качество обслуживания</p>
      <label>
        <select 
        // style={{color:store.color}}
          defaultValue=""
          onChange={store.qualityServiceChange}
          value={store.qualityService}
          required
        >
          <option value="" disabled>
            Качество обслуживания
          </option>
          <option value="0">&#128545; Плохое (0%)</option>
          <option value="5">&#128528; Нормальное (5%)</option>
          <option value="10">&#128578; Хорошее (10%)</option>
          <option value="15">&#128525; Отличное (15%)</option>
        </select>
      </label>
      <p>Количество человек</p>
      <label>
        <input
          onChange={store.numberPeopleChange}
          type="number"
          value={store.numberPeople}
          min="1"
          required
        />
      </label>
      <div className="box-btn">
        <button className="btn-calc">Посчитать</button>
        <button
          className="btn-clear"
          type="button"
          onClick={store.handleDefault}
        >
          Сбросить
        </button>
      </div>
      <div className="box-tips">
        <p className="text-tips">Чаевые: {store.tips} ₽</p>
        <p className="comments-one">(с каждого)</p>
      </div>
      <div className="box-total">
        <p className="text-total">Всего: {store.totalSum} ₽</p>
        <p className="comments-two">(с каждого)</p>
      </div>
    </form>
  );
});

export default Main;
