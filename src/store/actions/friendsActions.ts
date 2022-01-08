import { TypeFriend } from "../../types/types"
import { ADD_FRIENDS } from "../consts"

export const addFriends = (friend: TypeFriend[]) => {
    return {
        type: ADD_FRIENDS,
        payload: friend
    }
}

export const delFriends = (friend: TypeFriend[]) => {
    return {
        type: ADD_FRIENDS,
        payload: friend
    }
}