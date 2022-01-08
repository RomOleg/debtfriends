import { TypeDebt } from "../../types/types";

export interface DebtActions {
    type: string,
    payload: TypeDebt[],
}