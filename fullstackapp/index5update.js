const dbConnect=require('./mongodbconnection')


const updatedata =async()=>{
    const db=await dbConnect();
    const result=await db.updateOne(
        {id:5},{
            $set:{category:'undergarment'}
        }
    )
    console.warn(result)

}

updatedata();