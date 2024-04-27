import express from "express";
import db from "../db.js";
const router = express.Router();

//Get Tech from tech id
router.get("/:idTech",(req,res)=>{
    const value = [req.params.idTech]
    console.log("ping")
    const q = "SELECT * FROM tech WHERE idTech =?"
    db.query(q,value,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

router.post("/",(req,res)=>{
    const {password} = req.body;
    const {username} = req.body;
    
    const q = "SELECT * FROM tech WHERE username = ?"



    db.query(q,[username],(err,data)=>{

        console.log(data[0]);

        if(!data[0]){
            return res.status(404).json({message: "User not found"})
        }
        const dbIdTech = data[0].idTech;
        const dbUsername = data[0].username;
        const dbPassword = data[0].password;
        
        if(err) return res.json(err)
        
        if(password === dbPassword && username === dbUsername){
            return res.status(200).json(data);
        } else {
            return res.status(403).json({message: "Wrong pass"})
        }

        
    })
});




export default router;