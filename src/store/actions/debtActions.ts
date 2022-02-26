import { TypeDebt } from "../../types/types"
import { ADD_DEBT, DEL_DEBT } from "../consts"
import { DebtActions } from "../types"

export const addDebt = (debt: TypeDebt): DebtActions => {
    return {
        type: ADD_DEBT,
        payload: debt
    }
}

export const delDebt = (debt: TypeDebt): DebtActions => {
    return {
        type: DEL_DEBT,
        payload: debt
    }
}