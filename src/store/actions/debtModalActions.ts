import { HIDE_MODAL_DEBTS, SHOW_MODAL_DEBTS } from "../consts"

export const showDebtModal = () => {
    return {
        type: SHOW_MODAL_DEBTS,
    }
}

export const hideDebtModal = () => {
    return {
        type: HIDE_MODAL_DEBTS,
    }
}