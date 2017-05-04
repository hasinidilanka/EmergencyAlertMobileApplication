//dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;
var counter = require("./userCount.model");
// var counter = mongoose.model('counter', userCountSchema);
// var v = userCount.

//Schema
var userSchema = new mongoose.Schema({
    id :{type :String},
    name : {type:String,required:true},
    telephoneNumber :{type:String,unique:true},
    rate : {type:Number,min:0,max:5,default:1},
    alertMessage : {type:String,required:true,default:"Help Me"}
});




userSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'User'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.id = counter.seq;
        next();
    });
});

//return models:
module.exports=restful.model('user',userSchema);
