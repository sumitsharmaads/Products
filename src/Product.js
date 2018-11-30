import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Product extends Component {
  render() {
    return (
      <div className="Product">
      	<table>
      	  <tr>
      	  	<th>Product Name</th>
      	  	<th>Product ID</th>
      	  	<th>Product Price</th>
      	  	<th>Product Image</th>
      	  	<th>Select Product</th>
      	  </tr>
      	  <tr>
      	  	<td>{this.props.name}</td>
      	  	<td>{this.props.id}</td>
      	  	<td>{this.props.price}</td>
      	  	<td><img src = {this.props.image } height="150px" width="150px"></img></td>
      	  	<td><button><Link to="/Productdeatil">Select Product</Link></button></td>
      	  </tr>
        </table>
      </div>
    );
  }
}

export default Product;
