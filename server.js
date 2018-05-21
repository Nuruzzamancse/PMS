var express = require('express');
var path = require('path');
var cors = require('cors');
var passport = require('passport');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.connect(config.database, (err)=>{
    if(err)
        console.log(err);
    else
        console.log('Database connected successfully');
})


const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


const medicine = require('./routes/medicine');
app.use('/medicine', medicine);

app.listen(PORT, ()=>{
    console.log('Serve has been started at port '+ PORT);
})