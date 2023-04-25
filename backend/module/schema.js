const mongoose=require('mongoose');

const mongoURI="mongodb://0.0.0.0/Project(Fetchdata)";
var MongoDB=mongoose.connect(mongoURI).connection
var conn =mongoose.Collection;


var userSchema=new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String
});
var userModel= mongoose.model('records',userSchema);
module.exports=userModel;
