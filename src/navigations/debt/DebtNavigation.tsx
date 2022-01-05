import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebtList from '../../screens/DebtList';
import DebtInfo from '../../screens/DebtInfo';
import { RouterParamList } from '../types';
import GroupPeopleList from '../../screens/GroupPeopleList';

const DebtNavigation = () => {
  
  const Stack = createNativeStackNavigator<RouterParamList>();

  return (
      <Stack.Navigator>
        <Stack.Screen name={"DebtList"} component = { DebtList } />
        <Stack.Screen name={"DebtInfo"} component = { DebtInfo } />
        <Stack.Screen name={"GroupPeopleList"} component = { GroupPeopleList } />
      </Stack.Navigator>
    )
}

export default DebtNavigation;