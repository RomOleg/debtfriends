import { ADD_DEBT, DEL_DEBT } from "../consts";
import { TypeDebt } from "../../types/types";
import { DebtActions } from "../types";

const initialState: TypeDebt[] = [
  {
    id: "1",
    name: "не туса",
    sum: 1000,
    debtInfo: [
      { id: "3", debtorName: "1234", debtMy: "0", debtClaim: "100" },
      { id: "4", debtorName: "1234", debtMy: "0", debtClaim: "0" },
    ],
  },
  {
    id: "2",
    name: "супер пати",
    sum: 1000,
    debtInfo: [
      { id: "3", debtorName: "1234", debtMy: "0", debtClaim: "0" },
      { id: "4", debtorName: "1234", debtMy: "0", debtClaim: "0" },
    ],
  },
];

const debtReducer = (state = initialState, action: DebtActions) => {
  switch (action.type) {
    case ADD_DEBT:
      return [...state, action.payload];
    case DEL_DEBT:
      return [...state.filter(debt => debt.id !== action.payload.id)];
    default:
      return state;
  }
};

export default debtReducer;
