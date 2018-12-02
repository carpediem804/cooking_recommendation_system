const multer = require('multer');
const { Router } = require('Express')
const router = Router()

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
//const upload = multer({
//    storage: storage
//}).any();


const upload = multer({
    storage: storage
}).single('myfile');
router.post('/:id', (req, res) => {
    upload(req, res, err => {
        if (err) console.log(err);
    });
})
