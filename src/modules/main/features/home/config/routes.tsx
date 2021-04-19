import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Screens from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Screens.HomeScreen} />
    </Stack.Navigator>
  );
};

export {Routes};
