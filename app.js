const express = require('express');
const mysql = require('mysql');


const db = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : '',
    database : 'studentdb'
});


db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected...");
});






const app = express();


app.listen('3000',()=>{
    console.log("Server Started on port 3000");
});
