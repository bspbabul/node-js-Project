const dbConnect=require('./mongodbconnection')


const deletedata =async()=>{
    const db=await dbConnect();
    const result=await db.deleteOne(
        {id:5}
    )
    console.warn(result)

}

deletedata();