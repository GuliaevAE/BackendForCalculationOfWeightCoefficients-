const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password:"12345",
    host:"localhost",
    port:5432,
    database:'mag_postgres'
})
module.exports = pool








// pool.connect();
// pool.query("select * from videokards",(err,res)=>{
//     if(!err){
//         console.log(res.rows)
//     }else{
//         console.log(res)
//     }
//     pool.end
// })




// const mysql = require("mysql2");
  
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "usersdb",
//   password: "пароль_от_сервера"
// });