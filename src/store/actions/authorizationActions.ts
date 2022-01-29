import { SIGN_IN, SIGN_OUT } from "../consts";

export const signIn = () => {
    return {
        type: SIGN_IN,
        payload: '12345',
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}