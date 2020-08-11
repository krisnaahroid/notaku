import React from 'react';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../scenes/features/home';
import Onboarding from '../scenes/features/onboarding';

const Stack = createStackNavigator();

export default function AppStack() {

  const isInitial = true ? 'Onboarding' : 'Home';

  return (
    <Stack.Navigator initialRouteName={isInitial}>
      <Stack.Screen 
      name='Home' 
      component={Home}
      options={{
        header: () => null,
        cardStyleInterpolator:
          CardStyleInterpolators.forVerticalIOS,
      }} 
      />
      <Stack.Screen 
      name='Onboarding' 
      component={Onboarding}
      options={{
        header: () => null,
        cardStyleInterpolator:
          CardStyleInterpolators.forVerticalIOS,
        }} 
       />
    </Stack.Navigator>
  );
}
