const express = require('express')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range');
    res.header('Access-Control-Max-Age', 1728000);
   	res.header('Content-Type', 'text/plain; charset=utf-8');
    res.header('Content-Length', 0);
      
    if ('OPTIONS' == req.method) {
     	res.send(200);
    }
    else {
    	next();
  	}
	};

  app.use(allowCrossDomain);  
  app.disable('etag');

app.get('/home', (req, res) => res.send('I am in expressjs sumit'))
app.get('/about', (req, res) => res.send('I am in expressjs sharma'))

app.get('/aboutus',function(req,res) {
	console.log('hello');
	var mydata = {"name":"Sumit","profile":"HR"} ;
	res.send(mydata)
})

app.post('/details',function(req,res) {
  console.log('i am in product details');
  var details = [
    "http://michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
    "http://michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_2?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
    "http://michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_3?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
    "http://michaelkors.scene7.com/is/image/MichaelKors/CR65FY220B-0001_8?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90"
  ];
  res.send(details)
})


app.listen(9000, function (){
	console.log("Example app listening");
})