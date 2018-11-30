import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Deatils from './Deatils';

class Productdeatil extends Component {
  constructor(props) {
  	super(props);
  	this.state ={
  		images:[
  		"michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
  		"michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_2?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
  		"michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_3?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
  		"michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_8?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90"
  		], currentIndex:0
  	}
  }

nextpic = () => {

  this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  console.log('this is next pic');
}

prevpic = () => {
	this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1

    }));
}
  render() {
  	return (
  	  <div>
  	   <button className="right" onClick={this.nextpic}>next</button>
  	   <div>
  	  	  {this.state.images.map((abc,i) =>(
          <Deatils key={i} images={abc.images[0]} />
            ))
          }
        </div>
       <button className="left" onClick={this.prevpic}>previous</button>
  	  </div>
  	)
  }
}
export default Productdeatil;