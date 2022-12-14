import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainContainer from './navigation/MainContainer';
import LoginScreen from './navigation/screens/LoginScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }} //Den behøver ikke vise headeren hvor der står "MeetMe"
          name='MeetMe'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='MainContainer'
          component={MainContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
