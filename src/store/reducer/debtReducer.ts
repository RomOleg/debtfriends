import { ADD_DEBT, DEL_DEBT } from "../consts";
import { TypeDebt } from "../../types/types";
import { DebtActions } from "../types";

const initialState: TypeDebt[] = [
  {
    id: "1",
    name: "не туса",
    sum: 1000,
    friends: [
      { id: "1", name: "Gala" },
      { id: "2", name: "Naomi" },
      { id: "3", name: "Piter" },
      { id: "4", name: "Saitama" },
    ],
    debtInfo: [
      { id: "3", debtorName: "1234", debtMy: "0", debtMe: "0" },
      { id: "4", debtorName: "1234", debtMy: "0", debtMe: "0" },
    ],
  },
  {
    id: "2",
    name: "супер пати",
    sum: 1000,
    friends: [
      { id: "1", name: "Naruto" },
      { id: "2", name: "Sarura" },
      { id: "3", name: "Saske" },
    ],
    debtInfo: [
      { id: "3", debtorName: "1234", debtMy: "0", debtMe: "0" },
      { id: "4", debtorName: "1234", debtMy: "0", debtMe: "0" },
    ],
  },
];

const debtReducer = (state = initialState, action: DebtActions) => {
  switch (action.type) {
    case ADD_DEBT:
      return [...state, ...action.payload];
    case DEL_DEBT:
      return [...action.payload];
    default:
      return state;
  }
};

export default debtReducer;
