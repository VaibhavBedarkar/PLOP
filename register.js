
var express=require("express");

var connection = require('./connection');

module.exports.register=function(req,res){
    var users={
        "name":req.body.name,
		"clas":req.body.clas,
        "email":req.body.email,
        "password":req.body.password,
		"mobile":req.body.mobile,
        "dob":req.body.dob,
        "prn":req.body.prn,
        "address":req.body.address,
        "state":req.body.state,
    }
    connection.query('INSERT INTO student SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}