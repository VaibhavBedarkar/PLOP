var express=require("express");
var bodyParser=require('body-parser');
var connection = require('./connection');
var app = express();

var registerController=require('./register');
var authenticateController=require('./login');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" ); 

})
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "signup.html" );  

}) 

app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

app.post('/register', registerController.register);
app.post('/login', authenticateController.authenticate);
app.listen(8012);