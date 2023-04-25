var express=require('express');
var userModel=require('./module/schema');
var router=express.Router();



router.get('/getalluser',async function(req,res,next){
     await userModel.find({}).then((data)=>{
       console.log(data);
     }).catch((err)=>{
        console.log(err);
     });

});

router.get('/first',async function(req,res,next){
    userModel.updateMany(
        { income : { $type: 2 } },
        [{ $set: { income: { $convert: { input: "$income", to: 1 } } } }]
      )
    await userModel.find({$and:[{ income:{$lt:5} },{car:{$in:["BMW","Mercedes"]}}]}).then((data)=>{
        res.json(data);
      }).catch((err)=>{
         res.json(err);
      });
   
    
    
})
router.get('/second',async function(req,res,next){
    userModel.updateMany(
        { phone_price : { $type: 2 } },
        [{ $set: { phone_price: { $convert: { input: "$phone_price", to: 1 } } } }]
      )
        await userModel.find({$and:[{ gender:{$ne:"Female"} },{phone_price:{$gt:10000}}]}).then((data)=>{
            res.json(data);
          }).catch((err)=>{
             console.log(err);
          });
})

router.get('/third',async function(req,res,next){
  userModel.find({"last_name": /^M/,
  $expr: {
    $regexMatch: {
      input: "$email",
      regex: /.*M.*/i
    }},
    quote: /^[\s\S]{15,}$/ })
  .then((data)=>{
        res.json(data);
      }).catch((err)=>{
         console.log(err);
})
});

router.get('/fourth',async function(req,res,next){
    await userModel.find({$and:[{ email: {$regex: /^([^0-9]*)$/ }},{car:{$in:["BMW","Mercedes","Audi"]}}]}).then((data)=>{
        res.json(data);
      }).catch((err)=>{
         console.log(err);
      })
});

router.get('/fifth',async function(req,res,next){
    userModel.updateMany(
        { income : { $type: 2 } },
        [{ $set: { income: { $convert: { input: "$income", to: 1 } } } }]
      )
    await userModel.aggregate([
        { $match: { income: { $ne: null, $ne: undefined } } },
        { $group:
           {
             _id: "$city",
             total_users: { $sum: 1 },
             average_income: { $avg: "$income" }
           }
        },
        { $sort: { total_users: -1 } },
        { $limit: 10 }
     ])
      .then((data)=>{
        res.json(data);
      }).catch((err)=>{
         console.log(err);
      })
});
    
    




module.exports=router;

