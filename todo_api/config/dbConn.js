const mysql = require('mysql2')

//Database connection
const dbConn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
})


dbConn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log('Database established successfully')
})


module.exports = dbConn