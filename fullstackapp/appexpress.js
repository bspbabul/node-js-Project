let express=require('express');
let app=express()
let port = process.env.PORT||9700;
let morgan=require('morgan');
let categoryRouter=require('./src/controller/categoryRoute')
let productsRouter=require('./src/controller/productsRoute')

app.get('/',function(req,res){
    res.send('home page')
})

app.use('/category',categoryRouter);
app.use('/products',productsRouter);

app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log("server is running on port "+port);
    }
})

