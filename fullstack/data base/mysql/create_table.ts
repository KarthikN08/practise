var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'salaar_database'
})
con.connect((err:any)=>{
    if(err) throw err;
    console.log('connected')
    let query="CREATE TABLE bahubali(name VARCHAR(255),chocalate VARCHAR(255),age int(5),)"
    con.query(query,(err:any)=>{
        if(err) throw err;
        console.log('db inseterd')
    })

})
