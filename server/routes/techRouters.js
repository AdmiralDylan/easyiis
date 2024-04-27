import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/:company_idCompany",(req,res)=>{
    const value = [req.params.company_idCompany]
    const q = "SELECT * FROM tech WHERE company_idCompany =?"
    db.query(q,value,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



router.post("/",(req,res)=>{
    const q = "INSERT INTO tech (`password`,`username`,`isAdmin`,`nameFirst`,`nameLast`,`signature`,`email`,`company_idCompany`) VALUES (?)";
    const values = [
        req.body.password,
        req.body.username,
        req.body.isAdmin,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.body.company_idCompany,
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

router.put("/:idTech",(req,res)=>{
    const q = "UPDATE tech SET `password` =?,`username`=?,`isAdmin`=?,`nameFirst`=?,`nameLast`=?,`signature`=?,`email`=?,`company_idCompany`=? WHERE idTech = ?";
    const values = [
        req.body.password,
        req.body.username,
        req.body.isAdmin,
        req.body.nameFirst,
        req.body.nameLast,
        req.body.signature,
        req.body.email,
        req.body.company_idCompany,
        req.params['idTech'],
    ]
    //console.log("values into SQL",values);
    db.query(q,values, (err,data)=>{
        if(err) return res.json(err);
        return res.json("Tech Update");
    });
});

router.delete("/:idTech", (req,res)=>{
    const idTech = req.params.idTech;
    const q = "DELETE FROM tech WHERE idTech = ?";
    
    db.query(q,idTech,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})




export default router;