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
    return res.json("hi");
})

app.get('/company',(re,res)=>{
    res.json('SLECT')
})

app.listen(8081, ()=> {
    console.log("yuh");
})
