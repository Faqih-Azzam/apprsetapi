var mysql = require('mysql');

// buat koneksi database

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'databaseapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log(`mysql berhasil`);
});

module.exports = conn;

