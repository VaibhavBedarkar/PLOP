// Initialize Express

const express = require('express');


// Initialize MySql

const mysql = require('mysql');

// Database Connectivity details

const db = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : '',
    database : 'studentdb'
});


// Database Connectivity Connection
db.connect((err)=>{
    if(err){
        console.log("Error Connecting to Database...");
    }
    else{
    console.log("Connected to Database...");}
});

const app = express();


app.listen('3000',()=>{
    console.log("Server Started on port 3000");
});
