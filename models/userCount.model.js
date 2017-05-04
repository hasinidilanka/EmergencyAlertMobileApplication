/**
 * Created by Hasini on 4/22/2017.
 */
//dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Shcema
var userCountSchema = new mongoose.Schema({
    _id: {type: String,required:true},
    seq: { type: Number, default: 0 }
});

module.exports=restful.model('userCount',userCountSchema);