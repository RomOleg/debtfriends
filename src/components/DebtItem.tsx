import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TypeDebt } from "../types/types";
import { DelBtn } from "./DelBtn";
import { showBtnDelete } from "../store/actions/visibleActions";
import { delDebt } from "../store/actions/debtActions";
import { connect } from "react-redux";
import { RootState } from "../store/store";

interface Props {
  debtGroup: TypeDebt;
  goto: (debtGroup: TypeDebt) => void;
  showBtnDelete: () => void;
  delDebt: (debt: TypeDebt) => void;
  debts: TypeDebt[];
  visible: boolean;
}

export const DebtItem: React.FC<Props> = ({
  debtGroup,
  goto,
  showBtnDelete,
  delDebt,
  visible,
  debts,
}) => {
  return (
    <TouchableOpacity
      onPress={() => goto(debtGroup)}
      onLongPress={showBtnDelete}
    >
      <View style={styles.itemDebt}>
        <Text style={styles.title}>{debtGroup.name}</Text>
        <Text style={styles.subtitle}>
          {debtGroup.debtInfo.length >= 1
            ? `Кол-во участников: ${1 + +debtGroup.debtInfo.length}`
            : `Только Вы`}
        </Text>
        <DelBtn
          idDebtGroup={debtGroup.id}
          debts={debts}
          delDebt={delDebt}
          visible={visible}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemDebt: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom: 1,
    position: "relative",
  },
  title: {
    fontSize: 20,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.3,
  },
});

const mapDispatchToProps = {
  showBtnDelete,
  delDebt,
};

const mapStateToProps = (state: RootState) => ({
  debts: state.debts,
  visible: state.visible.visibleBtnDelete,
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtItem);
