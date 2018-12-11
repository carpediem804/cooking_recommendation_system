const { Router } = require('Express');
const router = Router();
const likedata = require('../db/models/images');

router.post('/', function(req, res,next){
    console.log("remove로 들어옴");
    //console.log(req);
    var upheart = req.body.heart;
    var upid = req.body.id;
    var clickuser = req.body.useruid;
    upheart += 1;
    //console.log(r);
    console.log(upheart);
    console.log(upid);
    console.log(clickuser);
    likedata.findOne({_id:upid},function(err,userblog){
        console.log(userblog);
        var likeusers = userblog.likeuserId
        var n =likeusers.indexOf(clickuser);
        if(n==-1){
            likedata.findByIdAndUpdate(upid,{$set:{heart : upheart}},{new:true},function(err,tank){
                if(err){
                    console.log(err);
                }
                console.log(tank);
                res.send(tank);
            })
        }
        else{
            res.send(11111);
        }
    })

})

module.exports = router;