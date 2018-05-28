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

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


const medicine = require('./routes/medicine');
app.use('/api/medicine', medicine);

var categoryRouter = require('./routes/category');
app.use('/api/category',categoryRouter);

var user = require('./routes/user');
app.use('/api/user',user);

var auth = require('./routes/auth');
app.use('/api/auth',auth);

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, ()=>{
    console.log('Serve has been started at port '+ PORT);
})