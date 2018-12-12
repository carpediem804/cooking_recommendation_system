const { Router } = require('express');
const router = Router();
const likedata = require('../db/models/Images');

router.post('/', function(req, res,next){
    console.log("remove로 들어옴");
    //console.log(req);
    var upheart = req.body.heart;
    var upid = req.body.id;
    var clickuser = req.body.uid;
    upheart += 1;
    //console.log(r);
    console.log(upheart);
    console.log(upid);
    console.log(clickuser);
    likedata.findOne({_id:upid},function(err,userblog){
        console.log(userblog);
        var likeusers = userblog.likeuserId;
        console.log("likeusers : "+likeusers);
        var updateclickuser = likeusers + clickuser;
        console.log("updateclickuser : "+updateclickuser);
        likeusers = String(likeusers);

        var n =likeusers.indexOf(clickuser);
        if(n==-1){
            likedata.findByIdAndUpdate(upid,{$set:{heart : upheart,likeuserId : updateclickuser}},{new:true},function(err,tank){
                if(err){
                    console.log(err);
                }
                console.log(tank);
                res.send(tank);
            })
        }
        else{
            res.send("reject");
        }
    })

})
router.post('/talk', function(req, res,next){
    //console.log(req);
    console.log(req.body);

})

module.exports = router;