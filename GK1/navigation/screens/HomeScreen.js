import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import tennis from '../../assets/Tennis_Racket_and_Balls.png';

export default function HomeScreen({ navigation }) {
  const eventsRef = ref(database, '/events');
  const [events, setEvents] = useState({});

  //funktion der kører når applikationen åbnes. Henter al information fra database fra /events
  useEffect(() => {
    return onValue(eventsRef, (snapshot) => {
      setEvents(snapshot.val());
    });
  }, []);

  const eventsArray = Object.values(events);
  const eventsKeys = Object.keys(events);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.homePart}>
          <Text style={styles.headingText}>Recommendation</Text>
          <FlatList
            data={eventsArray} //bruger data fra eventsArray
            horizontal={true} //sætter den til horisontal
            style={styles.homeMini}
            showsHorizontalScrollIndicator={false} //fjern scrollindikator
            keyExtractor={(item, index) => eventsKeys[index]}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.event}>
                  <View style={styles.eventPic}>
                    <Image //bruger et standard billede på alle begivenheder
                      source={tennis}
                      style={{
                        alignSelf: 'center',
                        flex: 1,
                        width: '100%',
                        borderRadius: 40,
                      }}
                      resizeMode={'cover'}
                    />
                  </View>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventHeading}>{item.name}</Text>
                    <Text>Type: {item.type}</Text>
                    <Text>Place: {item.place}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.homePart}>
          <Text style={styles.headingText}>Near You</Text>
          <FlatList //eksempel på en anden liste. Lige nu viser den dog i samme rækkefølge som første liste
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headingText: { fontSize: 22, fontWeight: 'bold', margin: 15 },
  homePart: { flex: 1, padding: 0 },
  homeMini: {
    flex: 1,
    padding: 5,
  },
  event: {
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    height: 300,
    //width: undefined,
    borderColor: '#86A293',
    borderRadius: 40,
    padding: 15,
    aspectRatio: 1, //sætter bredden så den er 1:1 ift. højden
  },
  eventHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  eventPic: {
    flex: 2,
    margin: -5,
    alignSelf: 'stretch',
  },
});
