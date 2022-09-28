import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../../firebase';

export default function ProfileScreen({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('MeetMe');
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 26, fontWeight: 'bold', padding: 15 },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  button: {
    backgroundColor: '#86A293',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});
