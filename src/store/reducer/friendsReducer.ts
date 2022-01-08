import { ADD_DEBT, ADD_FRIENDS, DEL_DEBT, DEL_FRIENDS } from "../consts";
import { TypeFriend } from "../../types/types";
import { FriendActions } from "../types";

const initialState: TypeFriend[] = [
    {name: 'Anna'},
    {name: 'Vasia'},
    {name: 'Petr'},
];

const friendsReducer = (state = initialState, action: FriendActions) => {
    switch (action.type) {
        case ADD_FRIENDS:
            return [...state, ...action.payload];
        case DEL_FRIENDS:
            return [...action.payload];
        default:
            return state;
    }
}

export default friendsReducer;