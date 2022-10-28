import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../../firebase';

export default function ProfileScreen({ navigation }) {
  const handleSignOut = () => {
    auth //bruger auth fra firebase
      .signOut() //logger brugeren ud
      .then(() => {
        navigation.replace('MeetMe'); //når brugeren er logget ud, sendes de tilbage til LoginScreen
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      {/*Viser information om brugeren */}
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: '#86A293', fontWeight: '700', fontSize: 30 },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  button: {
    backgroundColor: '#86A293',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
});
