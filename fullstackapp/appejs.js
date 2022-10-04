let express=require('express');
let app=express()
let port = process.env.PORT||9700;
let morgan=require('morgan');
let categoryRouter=require('./src/controller/categoryRoute')
let productsRouter=require('./src/controller/productsRoute')

app.use(express.static(__dirname+'/public'));

app.set('views','./src/views');

app.set('view engine','ejs');






app.get('/',function(req,res){
    res.render('index')
})

app.use('/category',categoryRouter);
app.use('/products',productsRouter);

app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log("server is running on port "+port);
    }
})

