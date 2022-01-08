import { HIDE_BTN_DELETE, HIDE_MODAL_DEBTS, SHOW_BTN_DELETE, SHOW_MODAL_DEBTS } from "../consts"

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

export const showBtnDelete = () => {
    return {
        type: SHOW_BTN_DELETE,
    }
    // return dispatch => {
    //     dispatch({type: SHOW_BTN_DELETE});
    //     setTimeout(() => {
    //         dispatch(hideBtnDelete())
    //     }, 1000);
    // }
}

export const hideBtnDelete = () => {
    return {
        type: HIDE_BTN_DELETE,
    }
}