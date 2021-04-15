import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeComponent = () => {
  return (
    <View style={styles.homeScreen}>
      <Text> HomeScreen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeComponent} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  homeScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export {AppNavigation};
