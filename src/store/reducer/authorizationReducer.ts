import { SIGN_IN, SIGN_OUT } from "../consts";
import { TypeAuthorization } from "../types";

const initialState: TypeAuthorization = {
    isSignIn: false,
    token: '',
};

const authorizationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignIn: true, token: action.payload.token}
        case SIGN_OUT:
            return {...state, isSignIn: false, token: ''}
        
        default:
            return state;
    }
}

export default authorizationReducer;