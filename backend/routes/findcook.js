const { Router } = require('Express')
const cookModel = require('../db/models/cook')
//const patientModel = require('../db/models/patient')
var ps = require('python-shell');
var crawler = require('youtube-crawler');
const router = Router()
//var answer=0;
/* ... */
router.get('/',function(req,res,next){
    var args = req.params.checkedNames;
    console.log(args);
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
        var find_first = aaa[1]
        var find_second = aaa[3]
        var find_third = aaa[4]
        cookModel.findOne({recipeId : Number(find_first)+1}).exec()
            .then(first =>{
                console.log(first);
                //console.log(first.title)
                var first_url = "https://www.youtube.com/results?search_query="+first.title+"만드는법"
                console.log(first_url);
            });
        cookModel.findOne({recipeId: Number(find_second)+1}).exec()
        .then(second =>{
            console.log(second);
            var second_url = "https://www.youtube.com/results?search_query="+second.title+"만드는법"
            console.log(second_url);
        });
        cookModel.findOne({recipeId: Number(find_third)+1}).exec()
        .then(third =>{
            console.log(third);
            var third_url = "https://www.youtube.com/results?search_query="+third.title+"만드는법"
            console.log(third_url);
        })

    })//파이썬 쉘
//console.log(answer);
    //배열로 만드것은 py파일로 보내서 결과값 출력하는거다!
});
module.exports = router
