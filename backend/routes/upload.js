const multer = require('multer');
const { Router } = require('Express');
const router = Router();
const blogModel = require('../db/models/blog');
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

router.post('/', function(req, res,next){
    var args = req.body
    console.log(args);
    // upload(function(req, res, err){
    //     if (err) console.log(err);
    // });
    let saveblog = blogModel({
        blogId : req.body.blogId,
        title : req.body.title,
        category : req.body.category,
        body : req.body.bodycotent,
    })
    saveblog.save(function (error,data) {
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    })
})
router.post("/img", function(req, res) {
    console.log("img upload");
    upload(req, res, function (err) {
        if(req.file == null || req.file == undefined || req.file == ""){
            res.json('No Image Set');
        }else{
            if (err) {
                console.log(err);
            }else{
                let image = new Image();
                image.image = req.file.filename;
                image.save(()=>{
                    if (err) return next(err);
                });
            }
        }
    });

});


module.exports = router;
