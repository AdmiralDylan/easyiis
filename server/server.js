const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"password",
    database:"mydb"
})

app.get('/',(re,res)=> {
    return res.json("hi");
})

app.get('/company', (req,res)=>{
    const sql = "SELECT * FROM company";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8080,()=> {
    console.log("yuh");
})