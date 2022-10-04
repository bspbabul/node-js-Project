const express=require('express')
const path=require('path')
const app=express()
const port =2969

app.get('/',function(req,res){
    res.send('helloworld')
})

app.get('/about',function(req,res){
    //res.sendFile(path.join(__dirname,'index.html'))
    res.sendFile(path.join(__dirname, 'db .json'));
})
app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log("server is running on port "+port);
    }
})