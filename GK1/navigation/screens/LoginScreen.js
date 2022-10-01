import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState(''); //email er en tom string fra start
  const [password, setPassword] = useState(''); //password er en tom string fra start
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('MainContainer');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    //funktion til at håndtere signUp i appen
    auth
      .createUserWithEmailAndPassword(email, password) //benytter email og password
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email); //logger i konsollen at brugeren er blevet oprettet
      })
      .catch((error) => alert(error.message)); //slår fejl, hvis der sker fejl
  };

  const handleLogin = () => {
    auth //benytter firebase.auth til at autorisere logins
      .signInWithEmailAndPassword(email, password) //benytter email og password til autorisering
      .then((userCredentials) => {
        const user = userCredentials.user; //gemmer usercredentials som user
        console.log('Logged in with:', user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.over}>
        <Text style={styles.text}>MeetMe</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  inputContainer: { width: '80%' },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#86A293',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#86A293',
    borderWidth: 2,
  },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 16 },
  buttonOutlineText: { color: '#86A293', fontWeight: '700', fontSize: 16 },
  text: { color: '#86A293', fontWeight: '700', fontSize: 60 },
  over: { paddingBottom: 100 },
});
