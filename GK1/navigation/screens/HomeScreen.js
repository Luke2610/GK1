import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { database } from '../../firebase';
import { ref, onValue } from 'firebase/database';

export default function HomeScreen({ navigation }) {
  const eventsRef = ref(database, '/events');
  const [events, setEvents] = useState({});

  useEffect(() => {
    return onValue(eventsRef, (snapshot) => {
      let data = snapshot.val() || {};
      let eventsItems = { ...data };
      setEvents(snapshot.val());
      console.log(eventsItems);
    });
  }, []);

  const eventsArray = Object.values(events);
  const eventsKeys = Object.keys(events);

  return (
    <View style={styles.container}>
      <View style={styles.homePart}>
        <Text style={styles.headingText}>Recommendation</Text>
        <FlatList
          data={eventsArray}
          horizontal={true}
          style={styles.homeMini}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => eventsKeys[index]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.event}>
                <Text>Name: {item.name}</Text>
                <Text>Type: {item.type}</Text>
                <Text>Place: {item.place}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.homePart}>
        <Text style={styles.headingText}>Near You</Text>

        <ScrollView
          horizontal={true}
          bounces={true}
          style={styles.homeMini}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.event}></View>
          <View style={styles.event}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headingText: { fontSize: 22, fontWeight: 'bold' },
  homePart: { flex: 1, padding: 30, borderWidth: 1 },
  homeMini: {
    flex: 1,
    padding: 5,
  },
  event: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    height: '100%',
    //width: Dimensions.get('window').width * 0.6, //Sætter bredde til halvdelen af enhedens bredde
    borderColor: '#86A293',
    borderRadius: 40,
    padding: 15,
    aspectRatio: 1,
  },
});
