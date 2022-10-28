import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function EventScreen({ navigation }) {
  return (
    //tom screen der blot viser "Event Screen"
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.text}>
        Events
      </Text>
      <Text>
        Denne skærm skal i fremtiden vise alle begivenheder. Lige ligesom at
        trykke på "Restauranter" på Wolt, hvor den viser samtlige restauranter.
        I vores mockup er der et eksempel på dette
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: '#86A293', fontWeight: '700', fontSize: 30, marginBottom: 20 },
});
