import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

//screens
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import CreateEvent from './screens/CreateEvent';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = 'Home';
const eventName = 'Event';
const createEventName = 'Create';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    //<NavigationContainer>
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === eventName) {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (rn === createEventName) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#86A293',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={eventName} component={EventScreen} />
      <Tab.Screen name={createEventName} component={CreateEvent} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
    //</NavigationContainer>
  );
}

const styles = StyleSheet.create({});
