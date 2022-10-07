const MongoClient=require ('mongodb').MongoClient;
const url='mongodb://localhost:27017'
const database='babul1'
const client=new MongoClient(url);



 async function dbConnect(){
    let result=client.connect();
    let db=(await result).db(database);
    return db.collection('category')
    
}

module.exports=dbConnect;