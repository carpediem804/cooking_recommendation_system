//const multer = require('multer');
const { Router } = require('express');
const router = Router();
const Image = require('../db/models/Images');
const sns = require('../db/models/sns');
const upload = require('../multer/storage');



router.get('/img', function(req, res,next){
    console.log("upload/img로 들어옴")
    Image.find().then(dblist=>{
       // console.log(dblist);
        res.json({bloglist : dblist});
    })
})
router.post("/img", function(req, res) {
    console.log("img upload");
    //console.log(req.body.title);
   // console.log(req);
    console.log(req.query.title);
    console.log(req.query.bodycotent);
   // console.log("author : "+ req.query.author);
    //console.log(req.file);
    upload(req, res, function (err) {
        if(req.file == null || req.file == undefined || req.file == ""){
            res.json('No Image Set');
            console.log("이미지없음")
        }else{
            if (err) {
                console.log(err);
            }else{
                let image = new Image();
                image.image = req.file.filename;
                image.title = req.query.title;
                image.body = req.query.bodycotent;
                image.category = req.query.category;
                //image.blogId = req.query.blogId;
                image.authorname = req.query.author;
                image.heart = 0;
                image.likeuserId = "";
                console.log(image.authorname);
                image.save(()=>{
                    if (err) return next(err);
                });
                res.send("됫다됫다");
                console.log("보냇음 보냇음");
                //console.log(image);
            }
        }
    });
    //res.send("저장완료");

});
router.post("/userimg",function(req, res) {
    console.log("userimg로들어옴");
    console.log(req.query);
    console.log(req);
    upload(req, res, function (err) {
        if (req.file == null || req.file == undefined || req.file == "") {
            res.json('No Image Set');
            console.log("이미지없음")
        } else {
            if (err) {
                console.log(err);
            } else {
                let putsns = new sns();
                putsns.image = req.file.filename;
               // putsns.body =
            }
        }
    })//upload
})//router


module.exports = router;
