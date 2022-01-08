import { HIDE_MODAL_DEBTS, SHOW_MODAL_DEBTS } from "../consts";
import { TypeModal } from "../types";

const initialState: TypeModal = {
    visible: false
};

const debtModalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_MODAL_DEBTS:
            return {...state, visible: true}
        case HIDE_MODAL_DEBTS:
            return {...state, visible: false}
        default:
            return state;
    }
}

export default debtModalReducer;