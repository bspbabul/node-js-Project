const MongoClient=require ('mongodb').MongoClient;
const url='mongodb://localhost:27017'
const database='babul1'
const client=new MongoClient(url);



 async function getData(){
    let result=client.connect();
    let db=(await result).db(database);
    let collection=db.collection('products')
    let data=await collection.find({}).toArray()
    console.log(data);
    
}
getData();