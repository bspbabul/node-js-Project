const express = require('express');
const bodyParser = require('body-parser');
//const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 8799;
const fs = require('fs');
const formidable = require('formidable')


app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs')


app.use(bodyParser.json());
//app.use(fileUpload());

app.get('/',(req,res) => {
    res.render('index')
})

app.post('/profile',(req,res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err,field,files){
        let oldPath = files.yourimage.filepath;
        let newpath = `${__dirname}/public/images/${files.yourimage.originalFilename}`
        fs.rename(oldPath,newpath,function(err){
            if(err) throw err;
            res.render('display',{title:req.body.uname,image:`${files.yourimage.originalFilename}`})
        })
    })
})


app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})