import { StyleSheet } from 'react-native';
import React from 'react';

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
    <Tab.Navigator //bottomtab navigation
      initialRouteName={homeName} //start Home som er det første view
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name; //forkorte route.name

          if (rn === homeName) {
            //hvis den valgte tab er Home
            iconName = focused ? 'home' : 'home-outline'; //sæt icon til Ionicon "Home" hvis trykket på, sæt til "Home-Outline" hvis den ikke er i fokus
          } else if (rn === eventName) {
            //samme metode som ovenstående på de andre ikoner
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (rn === createEventName) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />; //sæt icon til ovenstående muligheder
        },
        tabBarActiveTintColor: '#86A293', //farve nå aktiv/i fokus
        inactiveTintColor: 'grey', //farve når inaktiv/ikke i fokus
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={eventName} component={EventScreen} />
      <Tab.Screen name={createEventName} component={CreateEvent} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
