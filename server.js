//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var usersRouter = require('./routes/user.routes');

//Socket timeout handling
var options = {
    server: {
        socketOptions: {
            keepAlive: 300000, connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS : 30000
        }
    }
};

//Connect to Mongodb
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, options);
} else {
    mongoose.connect('mongodb://Admin:19940806@ds141410.mlab.com:41410/emergencyalertdb');

    // Connect to local database

}
//mongoose.connect('mongodb://Admin:19940806@ds141410.mlab.com:41410/emergencyalertdb');

//express:
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
// app.use('/api',require('./routes/api'));
app.use('/user', usersRouter);

//start server:
app.listen(1000);
console.log('Server is running on 1000')