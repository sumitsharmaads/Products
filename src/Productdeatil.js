import React, {Component} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Productdeatil extends Component {
  constructor(props) {    
  	super(props);
  	this.state ={
  		currentIndex:0,
  		images:[]
	}
  }

  componentWillMount(){  
    const currentIndex =this.state.currentIndex;
    fetch('http://localhost:9000/details',{
    method:'post',
    headers : {
      'Accept' : 'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      currentIndex:currentIndex
    })
    })
    .then(response => response.json())
    .then(data => this.setState({images:data}));
  }

  nextpic = () =>{
  	this.setState({currentIndex:this.state.currentIndex+1})
  	if(this.state.currentIndex === 3){
  		this.setState({currentIndex : 0});
  	} 	
  }

  prevpic = () =>{
  	this.setState({currentIndex:this.state.currentIndex-1})
  	if(this.state.currentIndex === 0){
  		this.setState({currentIndex : 3});
  	} 
  } 

  render() {
    console.log(this.state.images);
  	return (
  	  <div>
  	  	<button className="left" onClick={this.prevpic}>previous</button>  	  	
  	  	<img className="fix" src={this.state.images[this.state.currentIndex]} width="600px" height="600px" />
  	    <button className="right" onClick={this.nextpic}>next</button>
  	  </div>
  	  
  	)
  }
}
export default Productdeatil;