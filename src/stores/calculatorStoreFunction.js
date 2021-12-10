import { makeObservable, observable, action, computed } from "mobx";

export function calculatorStoreFunction() {
  return makeObservable(
    {
      invoiceAmount: "",
      qualityService: "",
      numberPeople: "",
      tips: "___",
      totalSum: "___",

      // get color( ){return }

      invoiceAmountChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.invoiceAmount = e.target.value;
      },
      qualityServiceChange(e) {
        this.qualityService = e.target.value;
      },
      numberPeopleChange(e) {
        this.numberPeople = e.target.value;
      },
      handleDefault(e) {
        this.invoiceAmount = "";
        this.qualityService = "";
        this.numberPeople = "";
        this.tips = "___";
        this.totalSum = "___";
      },
      handleSubmit(evt) {
        evt.preventDefault();
        let numInvoiceAmount = Number(this.invoiceAmount);
        let numNumberPeople = Number(this.numberPeople);
        let numQualityService = Number(this.qualityService);

        let tipsResult = (
          ((numInvoiceAmount / numNumberPeople) * numQualityService) /
          100
        ).toFixed(2);

        let totalSumResult = (
          numInvoiceAmount / numNumberPeople +
          Number(tipsResult)
        ).toFixed(2);

        this.tips = tipsResult;
        this.totalSum = totalSumResult;
      },
    },
    {
      invoiceAmount: observable,
      qualityService: observable,
      numberPeople: observable,
      qualityServiceChange: action.bound,
      numberPeopleChange: action.bound,
      invoiceAmountChange: action.bound,
      handleSubmit: action.bound,
      handleDefault: action.bound,
      tips: observable,
      totalSum: observable,
    }
  );
}
