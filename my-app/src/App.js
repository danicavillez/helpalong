import React from 'react';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingPage';
import MentalHealth from './components/MentalHealth';
import Firebase from 'firebase';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <MentalHealth/>
    </div>
  );
}

function GetData(collectionName) {
  var db = Firebase.firestore();
  db.collection(collectionName)
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doSomething(doc.data());
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
