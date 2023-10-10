import axios from "axios";
import { transactionParser } from "./parser";
const transactions = [
  { customer: "John", month: "January", amount: 150 },
  { customer: "John", month: "February", amount: 80 },
  { customer: "John", month: "March", amount: 120 },
  { customer: "Sarah", month: "January", amount: 75 },
  { customer: "Sarah", month: "February", amount: 200 },
  { customer: "Sarah", month: "March", amount: 90 },
];

export const getTransactionsDetails = () => {
  return axios
    .get(
      "https://gist.githubusercontent.com/7sailu/64fff67d9e4523f9cf469354b93db912/raw/7e7211ee31c6807e6e276e2a260c167e29d20297/transactions.json"
    )
    .then((res) => {
      return transactionParser(res?.data?.transactions);
    });
};
