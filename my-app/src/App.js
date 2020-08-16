import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/LandingPage';
import INeedResources from './components/INeedResources';
import MentalHealth from './components/MentalHealth';
import IllOrPhysicalHealth from './components/IllOrPhysicalHealth';
import Issues from './components/Issues';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: "King",
      situation: "mentalhealth",
      resources: [],
    };
  }

  render() {
    return (
      <Router>
          <div className="App">
          <Navbar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/MentalHealth" exact component={MentalHealth} />
          <Route path="/IllOrPhysicalHealth" exact component={IllOrPhysicalHealth} />
          <Route path="/Issues" exact component={Issues} />
          <Route path="/INeedResources" exact component={INeedResources} />
          </div>
      </Router>   
    );
  }
}

export default App;
