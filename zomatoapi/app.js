let express=require("express")
let app=express()
let mongodb=require('mongodb')
let MongoClient =mongodb.MongoClient
let dotenv=require('dotenv')
dotenv.config();
let mongoUrl=process.env.mongoLiveUrl
let cors=require('cors')
const bodyParser = require("body-parser")
let port=process.env.PORT||7100
let db;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res) => {
    res.send("welcome to Heartbeat")
})

app.get('./location',(req,res)=>{
    db.collection('location').find().toArray((err,data)=>{
        if(err)throw err
        res.send(data)
    })
})

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error While Connecting')
    //db = client.db('augintern');
    db = client.db('babul');
    app.listen(port,() => {
        console.log(`Listing to port ${port}`)
    })
})
