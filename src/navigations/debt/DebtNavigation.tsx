import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebtList from '../../screens/DebtList';
import DebtInfo from '../../screens/DebtInfo';
import { DebtNavigationStackRouterParamList } from '../types';
import GroupPeopleList from '../../screens/GroupPeopleList';
import location from '../../location/location';
import { Login } from '../../screens/Login';
import Registration from '../../screens/Registration';
import ResetPassword from '../../screens/ResetPassword';
import { connect } from 'react-redux';

interface Props {
  isSignIn: boolean,
}

const DebtNavigation: React.FC<Props> = ({ isSignIn }) => {
  
  const Stack = createNativeStackNavigator<DebtNavigationStackRouterParamList>();

  const optionsDebtList = {
  }

  {
      return (
      !isSignIn ? 
      <Stack.Navigator>
        <Stack.Screen name={"DebtList"} component = { DebtList } options={{ title: location['ru'].DebtList, headerShown: false }} />
        <Stack.Screen name={"DebtInfo"} component = { DebtInfo } />
        <Stack.Screen name={"GroupPeopleList"} component = { GroupPeopleList } />
      </Stack.Navigator>
      :
      <Stack.Navigator>
        <Stack.Screen name={"Login"} component = { Login } options={{ headerShown: false }} />
        <Stack.Screen name={"Registration"} component = { Registration } options={{ headerShown: false }} />
        <Stack.Screen name={"ResetPassword"} component = { ResetPassword } options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
}

const mapDispatchToProps = {
  
}

const mapStateToProps = (state: any) => ({
  isSignIn: state.auth.isSignIn,
})

export default connect(mapStateToProps, mapDispatchToProps)(DebtNavigation);