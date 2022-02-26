import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TypeDebt } from "../types/types";
import BaseAlert from "../helpers/BaseAlert";

interface Props {
  delDebt: (debt: TypeDebt) => void;
  idDebtGroup: string;
  debts: TypeDebt[];
  visible: boolean;
}

export const DelBtn: React.FC<Props> = ({
  delDebt,
  debts,
  visible,
  idDebtGroup,
}) => {
  BaseAlert.setup(
    "delete-alert",
    "Вимание",
    "Вы действительно хотите удалить группу?",
    [
      { text: "Удалить", onPress: () => deleteGroup(), style: "default" },
      { text: "Отмена", onPress: () => {}, style: "cancel" },
    ],
    { cancelable: true }
  );

  const deleteGroup = (): void => {
    const newDebts = debts.filter((debt) => debt.id === idDebtGroup);
    delDebt(newDebts[0]);
  };

  return visible ? (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => BaseAlert.alert("delete-alert")}
      >
        <Icon name="trash" size={25} color="red" />
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: -8,
    // borderRadius: 50,
    // backgroundColor: '#f89',
    zIndex: 9998,
    width: 65,
    height: 65,
  },
});

export default DelBtn;
