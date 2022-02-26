import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { TypeFriend } from "../types/types";
import BaseButton from "./BaseButton";

interface Props {
  friends: TypeFriend[];
  setSelectedFriend: (selectedFriend: TypeFriend[]) => void,
  selectedFriend: TypeFriend[],
}

interface CheckedFriend extends TypeFriend {
  checked: boolean;
}

export const ChoiseeFriendList: React.FC<Props> = ({ friends, setSelectedFriend, selectedFriend }) => {
  const [listFriends, setListFriends] = useState<TypeFriend[]>(
    [] as TypeFriend[]
  );

  const [checkFriend, setCheckFriend] = useState<CheckedFriend[]>(
    friends.map((friend) => {
      return {
        ...friend,
        checked: false,
      };
    })
  );

  // const _selectionAll = (): void => {
  //   selectedFriend(friends);
  // }

  // const _selection = (): void => {
  //   selectedFriend(listFriends);
  // }

  const _checkedFriend = (friend: CheckedFriend): void => {
    if (!friend.checked) {
      setCheckFriend(checkFriend.map(chfriend => {
        if (chfriend.id === friend.id) {
          return {
            ...chfriend,
            checked: true,
          }
        }
        return chfriend;
      }));
      setSelectedFriend([...selectedFriend, { id: friend.id, name: friend.name }]);
    } else {
      setCheckFriend(checkFriend.map(chfriend => {
        if (chfriend.id === friend.id) {
          return {
            ...chfriend,
            checked: false,
          }
        }
        return chfriend;
      }));
      setSelectedFriend(selectedFriend.filter((sfriend) => sfriend.id !== friend.id));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {checkFriend.map((friend) => (
          <View key={friend.id}>
            <CheckBox
              title={friend.name}
              checked={friend.checked}
              onPress={() => _checkedFriend(friend)}
            />
          </View>
        ))}
      </View>
      {/* <View style={{ flex: 0.3 }}>
        <BaseButton title="Добавить друзей" onPress={_selection} />
        <BaseButton title="Добавить всех" onPress={_selectionAll} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({});

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiseeFriendList);
