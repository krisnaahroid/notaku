import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../scenes/auth/login';
import Register from '../scenes/auth/register'

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          header: () => null,
          cardStyleInterpolator:
            CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}