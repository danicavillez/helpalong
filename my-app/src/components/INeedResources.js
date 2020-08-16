import React, {Component} from 'react';
import Dropdown from './layout/Dropdown';
import db from '../firebase';

class INeedResources extends Component {
    constructor(props) {
        super(props);
        this.state = {display: []};
        this.GetData = this.GetData.bind(this);
    }

    GetData() {
        let resourceList = []
        console.log("mentalhealth");
        db.collection("mentalhealth")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            let text = JSON.stringify(doc.data());
            resourceList.push(doc.data());
            console.log("getting data:")
            console.log(doc.data());
            });
            console.log(resourceList);
        })
        .catch(function(error) {
            console.error("Error getting document: ", error);
        });
    
        this.setState({ display: resourceList }, () => {
          console.log(this.state.display); });
    }
    
    componentDidMount() {
        this.GetData();
    }

    componentDidUpdate() {
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
        let resources = this.state.display;
        console.log(resources);

        return (          
            <div>
                <h1>Food/Housing Resources</h1>  
                <p></p>  
                <Dropdown/>
                <p></p>  
                <div className="card text-center">
                    <div className="card-body">
                    <h3 className="card-title">Resources</h3>
                    {resources.map((resource, index) => (
                        <p key={index}>{resource}</p>
                    ))} 
                    </div>
                </div>
            </div>        
        );
    }

    /*
    <Dropdown county={this.props.county} onChange={this.props.handleChange}/>
    */
}

export default INeedResources;