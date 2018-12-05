 import React, { Component } from 'react';
import './App.css';
import Data from './Data';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state={product:[]};
  }

  componentWillMount(){
  
    fetch('http://localhost:9000/aboutus')
    .then(response => response.json())
    .then(data => this.setState({product:data}));
    console.log('hello')
  }


  render() {
    return (
      <div className="App">
        <h1>Hello i am {this.state.product.name}</h1>
      </div>
    );
  }
}

export default Demo;
