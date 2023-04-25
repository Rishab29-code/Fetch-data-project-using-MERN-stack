var express=require('express');
var app=express();
var onerouter=require('./main');
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.use('/',onerouter);


app.listen(5000,()=>{
    console.log("running");
})
module.exports=app;