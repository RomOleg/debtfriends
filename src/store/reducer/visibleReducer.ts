import { HIDE_BTN_DELETE, HIDE_MODAL_DEBTS, SHOW_BTN_DELETE, SHOW_MODAL_DEBTS } from "../consts";
import { TypeVisible } from "../types";

const initialState: TypeVisible = {
    visibleModal: false,
    visibleBtnDelete: false,
};

const visibleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_MODAL_DEBTS:
            return {...state, visibleModal: true}
        case HIDE_MODAL_DEBTS:
            return {...state, visibleModal: false}
        case SHOW_BTN_DELETE: 
            return {...state, visibleBtnDelete: true}    
        case HIDE_BTN_DELETE: 
            return {...state, visibleBtnDelete: false}    
        default:
            return state;
    }
}

export default visibleReducer;