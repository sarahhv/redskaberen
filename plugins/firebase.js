/* eslint-disable */
import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADpOmjb2qXc3sYCk7WZKQ5dfm6e_SweeY',
  authDomain: 'redskaberen.firebaseapp.com',
  databaseURL: 'https://redskaberen.firebaseio.com',
  projectId: 'redskaberen',
  storageBucket: 'redskaberen.appspot.com',
  messagingSenderId: '513611087669',
  appId: '1:513611087669:web:b2613431e1a26351ca967c',
};

// Initialize Firebase
let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
