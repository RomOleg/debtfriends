import { TypeFriend } from "../../types/types"
import { ADD_FRIENDS } from "../consts"
import { FriendActions } from "../types"

export const addFriends = (friend: TypeFriend): FriendActions => {
    return {
        type: ADD_FRIENDS,
        payload: friend
    }
}

export const delFriends = (friend: TypeFriend): FriendActions => {
    return {
        type: ADD_FRIENDS,
        payload: friend
    }
}