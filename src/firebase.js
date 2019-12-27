import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyC032Fub4IHK2A_n4VLsk1yb1F6uG6y8_4",
    authDomain: "soccer-34c8b.firebaseapp.com",
    databaseURL: "https://soccer-34c8b.firebaseio.com",
    projectId: "soccer-34c8b",
    storageBucket: "soccer-34c8b.appspot.com",
    messagingSenderId: "960853897304",
    appId: "1:960853897304:web:85b639736c3a20f7a41a2d",
    measurementId: "G-7LWZCDRDBF"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
}