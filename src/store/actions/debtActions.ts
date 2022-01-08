import { TypeDebt } from "../../types/types"
import { ADD_DEBT } from "../types"
import { DebtActions } from "./types"

export const addDebt = (debt: TypeDebt[]): DebtActions => {
    return {
        type: ADD_DEBT,
        payload: debt
    }
}