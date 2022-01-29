import { TypeDebt, TypeFriend } from "../types/types";

export interface DebtActions {
    type: string,
    payload: TypeDebt[],
}

export interface FriendActions {
    type: string,
    payload: TypeFriend[],
}

export interface TypeVisible {
    visibleModal: boolean,
    visibleBtnDelete: boolean,
}

export interface TypeAuthorization {
    isSignIn: boolean,
    token: string,
}