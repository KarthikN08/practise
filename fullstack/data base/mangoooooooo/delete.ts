var {MongoClient}=require('mongodb')
var dev_url="mongodb://127.0.0.1:27017"

var client=new MongoClient(dev_url)

var dbName="practise_1stBatch"

var dbconnector=async()=>{
    await client.connect()
    console.log("db connected"  )
   let db= client.db(dbName)
   let col=db.collection('student')
  
   let data=col.deleteOne({name:'abiya'})
   console.log(await data)
}
dbconnector() 