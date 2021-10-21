const mongoose = require('mongoose');

 mongoose.connect("mongodb://localhost:27017/olympics")
 .then(()=>{
     console.log("connection to the database is successful");
    }).catch((e)=>{
        console.log("connection to the database is successful"+e);
 })