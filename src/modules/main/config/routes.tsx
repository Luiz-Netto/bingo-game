import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as Features from '../features';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Features.HomeFeature.Config.Routes}
      />
    </Stack.Navigator>
  );
};

export {Routes};
