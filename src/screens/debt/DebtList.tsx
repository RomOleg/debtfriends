import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo, ScrollView, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { DebtNavigationStackRouterParamList } from "../../navigations/types";
import AddBtn from "../../components/AddBtn";
import DebtItem from "../../components/DebtItem";
import { TypeDebt } from "../../types/types";
import { showDebtModal } from "../../store/actions/visibleActions";
import { hideBtnDelete } from "../../store/actions/visibleActions";
import CreateGroupModal from "../modals/CreateGroupModal";

interface Props {
  debts: TypeDebt[];
  showDebtModal: () => void;
  hideBtnDelete: () => void;
  visibleBtnDel: boolean;
}

type NavigationProps = NativeStackNavigationProp<
  DebtNavigationStackRouterParamList,
  "DebtList"
>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, "DebtList">;

export const DebtList: React.FC<Props> = ({
  debts,
  showDebtModal,
  hideBtnDelete,
  visibleBtnDel,
}) => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const goto = (debtGroup: TypeDebt): void => {
    if (visibleBtnDel) {
      hideBtnDelete();
      return;
    }
    navigation.navigate("DebtInfo", { debtGroup });
  };

  const addDebtGroup = (): void => {
    navigation.navigate("AddDebtGroup");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={debts}
        renderItem={({ item }: ListRenderItemInfo<TypeDebt>) => (
          <DebtItem debtGroup={item} goto={goto} />
        )}
        keyExtractor={(item: TypeDebt) => item.id}
      />
      <AddBtn onPress={addDebtGroup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

const mapDispatchToProps = {
  showDebtModal,
  hideBtnDelete,
};

const mapStateToProps = (state: any) => ({
  debts: state.debts,
  visibleBtnDel: state.visible.visibleBtnDelete,
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtList);
