// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvDaEX2Vjs0Vmx--yGDpUFZdxTC3E-rvs',
  authDomain: 'godkendelsesopgave-1.firebaseapp.com',
  databaseURL:
    'https://godkendelsesopgave-1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'godkendelsesopgave-1',
  storageBucket: 'godkendelsesopgave-1.appspot.com',
  messagingSenderId: '180945105395',
  appId: '1:180945105395:web:48532f6b3347a8b91b2286',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const database = getDatabase(app);
export { database };
export { auth };
