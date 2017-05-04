/**
 * Created by Hasini on 4/22/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user.model');
var UserCount = require('../models/userCount.model');

var counter = require('../models/userCount.model').userCount;
var userschema = require('../models/user.model').user;




var register = function (req, res) {
    console.log(req.body);
    var user = new User();
    user.name = req.body.name;
    user.telephoneNumber = req.body.telephoneNumber;
    user.rate = req.body.rate;
    user.alertMessage =req.body.alertMessage;
    user.save()
        .then(function () {

            res.status(200);
            res.send("Success");
        })
        .catch(function (err) {
            // res.status(500);
            // res.send('Internal server error');
            console.log('error: ', err);
            if (err.name === 'MongoError' && err.code === 11000) {
                // res.send("User already exist!");
                // Duplicate username
                return res.status(500).send({ succes: false, message: 'User already exist!' });
            }
        })
//
};

// var getTelephoneVerified = function(req,res){
//
// };

// userschema.pre('save', function(next) {
//     var doc = this;
//     counter.findByIdAndUpdate({num: 'User'}, {$inc: { seq: 1} }, function(error, counter)   {
//         if(error)
//             return next(error);
//         doc.id = counter.seq;
//         next();
//     });
// });


module.exports = {
    // getById: getById,
    register: register
//    login: login
};

