import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebtList from '../../screens/DebtList';
import DebtInfo from '../../screens/DebtInfo';
import { DebtRouterStackParamList } from '../types';

const DebtNavigation = () => {
  
  const Stack = createNativeStackNavigator<DebtRouterStackParamList>();

  return (
      <Stack.Navigator>
        <Stack.Screen name={"Debt"} component = { DebtList } />
        <Stack.Screen name={"DebtInfo"} component = { DebtInfo } />
      </Stack.Navigator>
    )
}

export default DebtNavigation;