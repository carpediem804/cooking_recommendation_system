const { Router } = require('Express');
const router = Router();
const likedata = require('../db/models/images');

router.post('/', function(req, res,next){
    console.log("remove로 들어옴");
    var upheart = req.body.heart;
    //console.log(r);
    console.log(upheart);
    likedata.findByIdAndModify(upheart,{$set:{heart : heart+1}},{new:true},function(err,tank){
     if(err){
         console.log(err);
     }
     console.log(tank);
     res.send(tank);
    })


})

module.exports = router;