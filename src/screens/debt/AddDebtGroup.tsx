import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DebtNavigationStackRouterParamList } from "../../navigations/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BaseButton from "../../components/BaseButton";
import BaseTextInput from "../../components/BaseTextInput";
import { TypeDebt, TypeDebtInfo, TypeFriend } from "../../types/types";
import { connect } from "react-redux";
import { addDebt } from "../../store/actions/debtActions";
import { ChoiseeFriendList } from "../../components/ChoiseeFriendList";
import { AppDispatch, AppThunk, RootState } from "../../store/store";

interface Props {
  addDebt: (debt: TypeDebt) => void;
  friends: TypeFriend[];
}

type DebtInfoScreenProp = NativeStackNavigationProp<
  DebtNavigationStackRouterParamList,
  "AddDebtGroup"
>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, "AddDebtGroup">;

export const AddDebtGroup: React.FC<Props> = ({ addDebt, friends }) => {
  const navigation = useNavigation<DebtInfoScreenProp>();
  const route = useRoute<RouteProps>();

  const [name, setName] = useState<string>("");
  const [sum, setSum] = useState<string>("");
  const [selectedFriend, setSelectedFriend] = useState<TypeFriend[]>([]);

  const createGroup = (): void => {
    if (!name.trim()) return;

    const debtInfo: TypeDebtInfo[] = selectedFriend.map((friend: TypeFriend): TypeDebtInfo => {
        return {
            id: String(new Date()),
            debtorName: friend.name,
            debtClaim: sum ? String((+sum / selectedFriend.length).toFixed(2)) : '0',
            debtMy: '0',
        }
    })

    const group: TypeDebt = {
      id: String(new Date().getTime()),
      name: name,
      sum: 0,
      debtInfo,
    };
    
    setName("");
    setSum("");

    addDebt(group);
    navigation.navigate("DebtList");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <BaseTextInput
          onChangeText={setName}
          value={name}
          placeholder={"Название группы"}
        />
        <BaseTextInput
          onChangeText={setSum}
          value={sum}
          placeholder={"Требуемая вами сумма"}
        />
        <ChoiseeFriendList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={(selectedFriend) =>
            setSelectedFriend(selectedFriend)
          }
        />
      </ScrollView>
      <View>
        <BaseButton title="Добавить группу" onPress={createGroup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
});

const mapDispatchToProps = {
  addDebt, 
};

const mapStateToProps = (state: RootState) => ({
  visible: state.visible.visibleModal,
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDebtGroup);
