import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingPage';
import INeedResources from './components/INeedResources';
import MentalHealth from './components/MentalHealth';
import Issues from './components/Issues';
import Firebase from 'firebase';

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/MentalHealth" exact component={MentalHealth} />
        <Route path="/Issues" exact component={Issues} />
        <Route path="/INeedResources" exact component={INeedResources} />
        </div>
    </Router>   
  );
}


  const firebaseConfig = {
    apiKey: "AIzaSyAdHVn1PyB9yTfkI_GeP-9ZC4gqGcdnRBg",
    authDomain: "helpalong-ce7af.firebaseapp.com",
    databaseURL: "https://helpalong-ce7af.firebaseio.com",
    projectId: "helpalong-ce7af",
    storageBucket: "helpalong-ce7af.appspot.com",
    messagingSenderId: "1090390913228",
    appId: "1:1090390913228:web:a4b3a313742cf331d5d269",
    measurementId: "G-HR3S0DJWQT"
  };
  Firebase.initializeApp(firebaseConfig);
  var firestore = Firebase.firestore();


function GetData(collectionName) {
  var db = Firebase.firestore();
  db.collection("mentalhealth")
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
       console.log(doc.data());
      });
    })
    .catch(function(error) {
      console.error("Error getting document: ", error);
    });
}

function GetDataFromDocument(collectionName, documentName) {
  var db = Firebase.firestore();
  db.collection(collectionName).doc(documentName)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        // doSomething(doc.data());
      } else {
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.error("Error getting document: ", error);
    });
}

function SetData(collectionName, documentName, resourceName, resourceDescription, countyName, 
                 cityName, phoneNumber, emailAddress, buildingAddress) {
  var db = Firebase.firestore();
  db.collection(collectionName).doc(documentName)
    .set({
      resource: resourceName,
      description: resourceDescription,
      county: countyName,
      city: cityName,
      phone: phoneNumber,
      email: emailAddress,
      address: buildingAddress
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

export default App;
