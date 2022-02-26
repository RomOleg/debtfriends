import { ADD_DEBT, ADD_FRIENDS, DEL_DEBT, DEL_FRIENDS } from "../consts";
import { TypeFriend } from "../../types/types";
import { FriendActions } from "../types";

const initialState: TypeFriend[] = [
    {id: '123', name: 'Зинаида Агапова'},
    {id: '121', name: 'Никита Дуейн Платонов'},
    {id: '122', name: 'Наруто Узумаки'},
];

const friendsReducer = (state = initialState, action: FriendActions) => {
    switch (action.type) {
        case ADD_FRIENDS:
            return [...state, action.payload];
        case DEL_FRIENDS:
            return [...state, state.filter(friend => friend.id !== action.payload.id)];
        default:
            return state;
    }
}

export default friendsReducer;