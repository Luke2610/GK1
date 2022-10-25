import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { database } from '../../firebase';
import { ref, push } from 'firebase/database';

const CreateEvent = () => {
  //Lave et nyt event
  const [name, setName] = useState(''); //opret name, og sæt til ''
  const [type, setType] = useState(''); //opret type og sæt til ''
  const [place, setPlace] = useState(''); //opret place og sæt til ''
  const handleEvent = () => {
    //funktion der tager data fra applikation og indsætter i databasen
    push(ref(database, '/events'), {
      //skubber data ind i /events i databasen
      name: name,
      type: type,
      place: place,
    })
      .then(() => {
        //når data er indsat i database gør følgende
        console.log(`Data Saved with name: ${name}`);
        alert('Event created');
      })
      .catch((error) => {
        //hvis der sker noget uventet i forbindelse med at indsætte i database, gør følgende
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      {/*når tastatur åbner, "skub" skærmen op, så al stadig kan ses. 
        Herudover flere TextInputs som benyttes i funktionen over.
      */}
      <View style={styles.over}>
        <Text style={styles.text}>Create new event</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Name'
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Type of Event'
          value={type}
          onChangeText={(text) => setType(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Place'
          value={place}
          onChangeText={(text) => setPlace(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEvent} style={styles.button}>
          <Text style={styles.buttonText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#86A293',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: { width: '80%' },
  text: { color: '#86A293', fontWeight: '700', fontSize: 30 },
  over: { paddingBottom: 100 },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default CreateEvent;
