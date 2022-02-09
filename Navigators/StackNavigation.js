import React, {useState} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Demo from '../screen/Demo';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Demo} />
    </Stack.Navigator>
  );
}
