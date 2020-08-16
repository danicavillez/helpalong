import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdHVn1PyB9yTfkI_GeP-9ZC4gqGcdnRBg",
    authDomain: "helpalong-ce7af.firebaseapp.com",
    databaseURL: "https://helpalong-ce7af.firebaseio.com",
    projectId: "helpalong-ce7af",
    storageBucket: "helpalong-ce7af.appspot.com",
    messagingSenderId: "1090390913228",
    appId: "1:1090390913228:web:a4b3a313742cf331d5d269",
    measurementId: "G-HR3S0DJWQT"
});

const db = firebaseApp.firestore();

export default db;