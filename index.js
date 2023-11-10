const express =  require('express');
require('./connection');
const model = require('./model');
const { get } = require('http');


const app = express();
app.use(express.json());


app.listen(2000);


//image uplord using api multer npm packege
        // const multer = require('multer');

        // const fileup = multer({
        //     storage:multer.diskStorage({
        //         destination:(req,file,cb)=>{
        //             cb(null,"images");
        //         },
        //         filename:(res,file,cb)=>{
        //             cb(null,file.fieldname+"-"+Date.now()+".jpg");
        //         }
        //     })
        // }).single('user_file');


        // app.post('/file',fileup,(req,res)=>{
        //     res.send("done");
        // })




//api search post
        // app.post('/:key', async (req,res)=>{
        //     console.log(req.params.key);
        //     let result = await model.find({
        //         "$or":[
        //             {"username":{$regex:req.params.key}},
        //             {"password":{$regex:req.params.key}}
        //         ]
        //     });
        //     res.send(result);
        // });

//api search 
        // app.get('/:key', async (req,res)=>{
        //     console.log(req.params.key);
        //     let result = await model.find({
        //         "$or":[
        //             {"username":{$regex:req.params.key}},
        //             {"password":{$regex:req.params.key}}
        //         ]
        //     });
        //     res.send(result);
        // });


