import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteKey from './RouteKey';
import {AppStackParamList} from './types';
import CreateUser from 'src/Screens/CreateUser';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName={RouteKey.CreateUser}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={RouteKey.CreateUser} component={CreateUser} />
  </Stack.Navigator>
);
