import React, {Component} from 'react';
import Dropdown from './layout/Dropdown';
import db from '../firebase';

class INeedResources extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            resources: []
        };
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        this.GetData("mentalhealth");
    }

    GetData(collectionName) {
        var resourceList = []
        db.collection(collectionName)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
             var text = JSON.stringify(doc.data());
             console.log(text);
             resourceList.push(text);
            });
        })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });

        this.setState({ resources: resourceList });
      }
      
      GetDataFromDocument(collectionName, documentName) {
        db.collection(collectionName).doc(documentName)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                console.log(doc.data());
            } else {
              console.log("No such document!");
            }
        })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });
      }
      
      SetData(collectionName, documentName, resourceName, resourceDescription, countyName, 
                       cityName, phoneNumber, emailAddress, buildingAddress) {
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

    render() {
        return (
            <div>
                <Dropdown/>
                <p>{this.state.resources}</p>
            </div>        
        )
    }
}

export default INeedResources;