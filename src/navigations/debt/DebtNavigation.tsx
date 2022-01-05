import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebtList from '../../screens/DebtList';
import DebtInfo from '../../screens/DebtInfo';
import { RouterParamList } from '../types';
import DebtInfoNavigation from './DebtInfoNavigation';

const DebtNavigation = () => {
  
  const Stack = createNativeStackNavigator<RouterParamList>();

  return (
      <Stack.Navigator>
        <Stack.Screen name={"Debt"} component = { DebtList } />
        <Stack.Screen name={"DebtInfo"} component={DebtInfoNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
}

export default DebtNavigation;