import { ADD_DEBT, DEL_DEBT } from "../consts";
import { TypeDebt } from "../../types/types";
import { DebtActions } from "../types";

const initialState: TypeDebt[] = [
    { id: '1', name: 'не туса', sum: 1000, people: 3 },
    { id: '2', name: 'супер пати', sum: 1000, people: 10 },
    // { id: '3', name: 'group3', sum: 1000, people: 3 },
    // { id: '4', name: 'group4', sum: 1000, people: 3 },
    // { id: '5', name: 'group5', sum: 1000, people: 3 },
    // { id: '6', name: 'group6', sum: 1000, people: 3 },
    // { id: '7', name: 'group7', sum: 1000, people: 3 },
    // { id: '8', name: 'group8', sum: 1000, people: 3 },
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
}

export default debtReducer;