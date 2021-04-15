import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from './config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
