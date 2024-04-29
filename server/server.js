const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//this only serves as a test during early development. I can't seem to get rid of it lol

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
