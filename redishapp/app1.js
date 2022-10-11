let express=require('express')
let redis=require('redis')
let util=require('util')
let client=redis.createClient({
    host:'localhost',
    port:6379
})

client.set=util.promisify(client.set)
client.get=util.promisify(client.get)

let app=express();
app.use(express.json())

app.post("/",async (req,res)=>{
    const {key,value}=req.body;
   const response = await client.set(key,value)
   res.json(response)
})

app.get("/",async (req,res)=>{
    const {key}=req.body;
   const value = await client.get(key)
   res.json(value)
})


app.listen(8080,(err)=>{
    if(err)throw err;
    console.log(`server is running on port 8080`)
})