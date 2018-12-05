import React, {Component} from 'react';
import App from './App';
import Productdeatil from './Productdeatil';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Home extends Component {
  render() {
  	return (
  	  <Router>
  	  <div>
  	  <Route exact path="/" component={App} />	
  	  <Route path ="/Productdeatil" component={Productdeatil} />
  	  </div>
  	  </Router>
  	);
  }
}

export default Home;