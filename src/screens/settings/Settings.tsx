import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { SettingsNavigationStackRouterParamList } from "../../navigations/types";
import BaseButton from "../../components/BaseButton";
import { signOut } from '../../store/actions/authorizationActions';

interface Props {
    signOut: () => void
}

type NavigationProps = NativeStackNavigationProp<
  SettingsNavigationStackRouterParamList,
  "Main"
>;
type RouteProps = RouteProp<SettingsNavigationStackRouterParamList, "Main">;

export const Settings: React.FC<Props> = ({
    signOut
}) => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  return (
    <SafeAreaView style={styles.container}>
      <BaseButton title="Выйти" onPress={signOut}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

const mapDispatchToProps = {
    signOut,
};

const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
