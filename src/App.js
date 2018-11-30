import React, { Component } from 'react';
import './App.css';
import Product from './Product'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={product:[
    {name:"T-shirt", id:"12345", price:"40$", 
    image:["http://michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_IS?$categoryMediumNew$"]},
    {name:"Sweater", price:"75$", id:"1234", 
    image:["http://michaelkors.scene7.com/is/image/MichaelKors/CR86KMU2DG-0001_IS?$categoryMediumNew$"]}]}
  }

  render() {
    return (
      <div className="App">

       {this.state.product.map((abc,passing) =>(
        <Product name={abc.name} id={abc.id} image={abc.image} price={abc.price} />
          ))
       }
      </div>
    );
  }
}

export default App;
