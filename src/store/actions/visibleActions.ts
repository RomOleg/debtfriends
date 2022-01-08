import { HIDE_BTN_DELETE, HIDE_MODAL_DEBTS, SHOW_BTN_DELETE, SHOW_MODAL_DEBTS } from "../consts";
import { AppDispatch } from '../store';

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
    // return async (dispatch: AppDispatch) => {
    //     dispatch({type: SHOW_BTN_DELETE});
    //     setTimeout(() => {
    //         dispatch(hideBtnDelete())
    //     }, 5000);
    // }
}

export const hideBtnDelete = () => {
    return {
        type: HIDE_BTN_DELETE,
    }
}