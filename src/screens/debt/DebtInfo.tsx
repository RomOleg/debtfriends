import React, { useState } from "react";
import {
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
          {route.params.debtGroup.debtInfo.map((debtor) => (
            <View key={debtor.id} style={styles.blockDebtor}>
              <Text style={styles.textDebtor}>{debtor.debtorName}</Text>
              <View style={styles.leftBlockDebtor}>
                <Text style={[styles.textDebtorMy, styles.textDebtor]}>
                  {debtor.debtMy}
                </Text>
                <Text style={[styles.textDebtorMe, styles.textDebtor]}>
                  {debtor.debtMe}
                </Text>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <Icon name="attach-money" size={40} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <PayDebtOffModal
            visible={visible}
            hideModal={() => setVisible(false)}
            onChangeText={(value: string) => setPayDebtOff(value)}
            value={payDebtOff}
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
