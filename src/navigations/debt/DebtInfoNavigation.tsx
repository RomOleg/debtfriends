import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouterParamList } from '../types';
import DebtInfo from '../../screens/DebtInfo';
import GroupPeopleList from '../../screens/GroupPeopleList';

const DebtInfoNavigation = () => {
  
  const Tab = createMaterialTopTabNavigator<RouterParamList>();

  return (
      <Tab.Navigator>
        <Tab.Screen name={"DebtInfo"} component = { DebtInfo } />
        <Tab.Screen name={"GroupPeopleList"} component = { GroupPeopleList } />
      </Tab.Navigator>
    )
}

export default DebtInfoNavigation;