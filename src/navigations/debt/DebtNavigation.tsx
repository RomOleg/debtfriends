import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebtList from '../../screens/DebtList';
import DebtInfo from '../../screens/DebtInfo';
import { DebtNavigationStackRouterParamList } from '../types';
import GroupPeopleList from '../../screens/GroupPeopleList';
import location from '../../location/location';
import config from '../../../config';

const DebtNavigation = () => {
  
  const Stack = createNativeStackNavigator<DebtNavigationStackRouterParamList>();

  const optionsDebtList = {
  }

  return (
      <Stack.Navigator>
        <Stack.Screen name={"DebtList"} component = { DebtList } options={{ title: location['ru'].DebtList }}/>
        <Stack.Screen name={"DebtInfo"} component = { DebtInfo } />
        <Stack.Screen name={"GroupPeopleList"} component = { GroupPeopleList } />
      </Stack.Navigator>
    )
}

export default DebtNavigation;