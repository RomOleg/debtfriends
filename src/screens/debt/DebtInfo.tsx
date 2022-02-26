import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { DebtNavigationStackRouterParamList } from "../../navigations/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TypeDebt, TypeDebtInfo } from "../../types/types";
import Icon from "react-native-vector-icons/MaterialIcons";
import PayDebtOffModal from "../modals/PayDebtOffModal";
import { DebtItemItem } from "../../components/DebtItemInfo";

interface Props {
  debtGroup: TypeDebt;
}

type DebtInfoScreenProp = NativeStackNavigationProp<
  DebtNavigationStackRouterParamList,
  "DebtInfo"
>;
type RouteProps = RouteProp<DebtNavigationStackRouterParamList, "DebtInfo">;

export const DebtInfo: React.FC<Props> = ({ debtGroup }) => {
  const navigation = useNavigation<DebtInfoScreenProp>();
  const route = useRoute<RouteProps>();

  const [visible, setVisible] = useState<boolean>(false);
  const [payDebtOff, setPayDebtOff] = useState<string>("");

  return (
    <View style={styles.container}>
      {route.params.debtGroup.debtInfo.length > 0 ? (
        <View>
          <FlatList
            data={route.params.debtGroup.debtInfo}
            renderItem={({ item }: ListRenderItemInfo<TypeDebtInfo>) => (
              <DebtItemItem debtInfo={item} />
            )}
          />
        </View>
      ) : (
        <Text>Нет долгов</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  blockDebtor: {
    // flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom: 1,
  },
  leftBlockDebtor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  textDebtor: {
    fontSize: 20,
    maxWidth: "30%",
  },
  textDebtorMy: {
    color: "red",
  },
  textDebtorMe: {
    color: "green",
  },
});

export default DebtInfo;
