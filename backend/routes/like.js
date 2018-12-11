const { Router } = require('Express');
const router = Router();
const likedata = require('../db/models/images');

router.post('/', function(req, res,next){
    console.log("remove로 들어옴");
    //console.log(req);
    var upheart = req.body.heart;
    var upid = req.body.id;
    upheart += 1;
    //console.log(r);
    console.log(upheart);
    console.log(upid);

    likedata.findByIdAndUpdate(upid,{$set:{heart : upheart}},{new:true},function(err,tank){
     if(err){
         console.log(err);
     }
     console.log(tank);
     res.send(tank);
    })


})

module.exports = router;