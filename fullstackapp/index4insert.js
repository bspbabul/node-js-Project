const dbConnect=require('./mongodbconnection')


const insert =async()=>{
    const db=await dbConnect();
    const result=db.insert(
        {id:5,category:'underwear',thumb:'chaddi.jpg'}
        )
}

insert();