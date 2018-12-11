const multer = require('multer');
const { Router } = require('Express');
const router = Router();
const Image = require('../db/models/images');
const upload = require('../multer/storage');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const fileName = "흠냐" + req.params.id + ".jpg";
        cb(null, fileName);
    }
});

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
                console.log(image.authorname)
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


module.exports = router;
