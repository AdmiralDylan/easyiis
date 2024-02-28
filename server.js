const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"fx-991ES:SQL",
    database:"mydb"
})

app.get('/',(re,res)=> {
    return res.json("hello from the other side");
})

app.get('/company',(req,res)=> {
    const sql = "SELECT * FROM company";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(err)
    })
})

app.listen(8081, ()=> {
    console.log("yuh");
})
