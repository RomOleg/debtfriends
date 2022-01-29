import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DebtList from "../../screens/debt/DebtList";
import DebtInfo from "../../screens/debt/DebtInfo";
import {
  DebtNavigationStackRouterParamList,
  NavigationTabRouterParamList,
} from "../types";
import GroupPeopleList from "../../screens/debt/GroupPeopleList";
import location from "../../location/location";
import Registration from "../../screens/login/Registration";
import ResetPassword from "../../screens/login/ResetPassword";
import { connect } from "react-redux";
import Login from "../../screens/login/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../../screens/settings/Settings";

interface Props {
  isSignIn: boolean;
}

const DebtNavigation: React.FC<Props> = ({ isSignIn }) => {
  const Stack =
    createNativeStackNavigator<DebtNavigationStackRouterParamList>();

  const optionsDebtList = {};

  const DebtNavigation: React.FC = ({}) => (
    <Stack.Navigator>
      <Stack.Screen
        name={"DebtList"}
        component={DebtList}
        options={{ title: location["ru"].DebtList }}
      />
      <Stack.Screen name={"DebtInfo"} component={DebtInfo} />
      <Stack.Screen name={"GroupPeopleList"} component={GroupPeopleList} />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator<NavigationTabRouterParamList>();

  {
    return isSignIn ? (
      <Tab.Navigator>
        <Tab.Screen
          name={"Debts"}
          component={DebtNavigation}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Registration"}
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"ResetPassword"}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
};

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  isSignIn: state.auth.isSignIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtNavigation);
