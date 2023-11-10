const express =  require('express');
require('./connection');
const model = require('./model');
const { get } = require('http');

const app = express();

app.use(express.json());

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
app.get('/',(req,res)=>{
    res.send("done")
});

app.post('/:key', async (req,res)=>{
    console.log(req.params.key);
    let result = await model.find({
        "$or":[
            {"username":{$regex:req.params.key}},
            {"password":{$regex:req.params.key}}
        ]
    });
    res.send(result);
});


app.listen(2000);