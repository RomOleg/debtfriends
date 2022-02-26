import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DebtNavigationStackRouterParamList } from '../types';
import DebtInfo from '../../screens/debt/DebtInfo';
import GroupPeopleList from '../../screens/debt/GroupPeopleList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import location from '../../location/location';
import DebtList from '../../screens/debt/DebtList';

const Stack =
    createNativeStackNavigator<DebtNavigationStackRouterParamList>();

  const optionsDebtList = {};

  const DebtInfoNavigation: React.FC = ({}) => (
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


export default DebtInfoNavigation;