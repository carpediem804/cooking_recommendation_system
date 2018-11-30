const { Router } = require('Express')
const cookModel = require('../db/models/cook')
//const patientModel = require('../db/models/patient')
var ps = require('python-shell');
const router = Router()
//var answer=0;
/* ... */
//router.get('/',function(req,res,next){

    var options = {
        mode: 'text',

        pythonPath: '',

        pythonOptions: ['-u'],

        scriptPath: '',

        args: ['가나다','햄','감자','양파','대파','브로콜리'],//req.body

    };
ps.PythonShell.run('findcookname.py',options,function (err,result) {
       if(err) throw err;

       console.log("results %j",result);
       console.log("-------------------",result[0][0]);
       var aaaa = result[0].replace("[[","");
       //console.log(aaaa);
       aaaa = aaaa.replace("]]","");
        aaaa = aaaa.replace("]","");
         aaaa = aaaa.replace("[","");
        aaa = aaaa.split(' ');
       console.log("14214214 result : ",aaa);
        let cook = cookModel({
            recipeId : 1
        })
        cook.save(function (error,data) {

        })
       //var aaa = result[0]
        //cookModel.find({id:})
    })
//console.log(answer);
    //배열로 만드것은 py파일로 보내서 결과값 출력하는거다!
//});
module.exports = router
